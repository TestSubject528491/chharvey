const fs = require('fs')
const path = require('path')

const Ajv      = require('ajv')
const jsdom = require('jsdom')
const xjs = {
  Object: require('extrajs').Object,
  ...require('extrajs-dom'),
}
const ARIAPatterns = require('aria-patterns')

const { SCHEMATA } = require('schemaorg-jsd')
const requireOther = require('schemaorg-jsd/lib/requireOther.js')

const RESUME_SCHEMA = requireOther(path.join(__dirname, '../resume.jsd'))

/**
 * A résumé generated with given content data.
 */
class Resume {
  /**
   * @summary Construct a new Resume object.
   * @param   {!Object=} jsondata a JSON object that validates against `../resume.schema.json`
   */
  constructor(jsondata = {}) {
    let ajv = new Ajv()
    ajv.addSchema(SCHEMATA)
    let is_data_valid = ajv.validate(RESUME_SCHEMA, jsondata)
    if (!is_data_valid) {
      let e = new TypeError(ajv.errors[0].message)
      e.filename = 'resume.json'
      e.details = ajv.errors[0]
      console.error(e)
      throw e
    }

    /**
     * Raw JSON data for this resume.
     * @private
     * @final
     * @type {Object}
     */
    this._DATA = jsondata
  }





  /**
   * Compile the entire document.
   * @returns {string} the compiled DOM output
   */
  compile() {
    const dom = new jsdom.JSDOM(fs.readFileSync(path.join(__dirname, '../tpl/resume.tpl.html'), 'utf8'))
    const {document} = dom.window


    // ++++ USER-INPUT DATA ++++ //


    // ++++ DATA WITH NO PATTERNS ++++ //
    new xjs.HTMLElement(document.querySelector('main header [itemprop="name"]')).empty().append(
      ARIAPatterns.xPersonFullname.render({
        // REVIEW indentation
      familyName      : this._DATA.familyName      || '',
      givenName       : this._DATA.givenName       || '',
      additionalName  : this._DATA.additionalName  || '',
      honorificPrefix : this._DATA.honorificPrefix || '',
      honorificSuffix : this._DATA.honorificSuffix || '',
      })
    )

      new xjs.HTMLUListElement(document.querySelector('main header address ul.c-Contact')).populate([
        {
          name: 'telephone',
          href: (this._DATA.telephone) ? `tel:${this._DATA.telephone}` : '',
          icon: 'device-mobile',
          text: this._DATA.$contactTitles.telephone || this._DATA.telephone,
        },
        {
          name: 'email',
          href: (this._DATA.email) ? `mailto:${this._DATA.email}` : '',
          icon: 'mail',
          text: this._DATA.$contactTitles.email || this._DATA.email,
        },
        {
          name: 'url',
          href: this._DATA.url || '',
          icon: 'home',
          text: this._DATA.$contactTitles.url || this._DATA.url,
        },
      ], function (frag, data) {
        new xjs.HTMLAnchorElement(frag.querySelector('.c-Contact__Link')).href(data.href || null)
        frag.querySelector('.c-Contact__Link').setAttribute('itemprop', data.name)
        frag.querySelector('.c-Contact__Icon').className = frag.querySelector('.c-Contact__Icon').className.replace('{{ octicon }}', data.icon)
        frag.querySelector('.c-Contact__Text').textContent = data.text
      })

    document.querySelector('#about slot[name="about"]').textContent = this._DATA.description || ''
    new xjs.HTMLDListElement(document.querySelector('#edu .o-ListAchv')).empty().append(
      new xjs.DocumentFragment(document.createDocumentFragment()).append(
        ...(this._DATA.$degrees || []).map(Resume.TEMPLATES.xDegree.render, Resume.TEMPLATES.xDegree) // i.e. `(item) => Resume.TEMPLATES.xDegree.render(item)`
      )
    )

      new xjs.HTMLUListElement(document.querySelector('.o-Grid--skillGroups')).populate(this._DATA.$skills || [], function (frag, data) {
        frag.querySelector('.o-List__Item'    ).id          = `${data.identifier}-item` // TODO fix this after fixing hidden-ness
        frag.querySelector('.c-Position'      ).id          = data.identifier
        frag.querySelector('.c-Position__Name').textContent = data.name
        new xjs.HTMLDListElement(frag.querySelector('.o-Grid--skill')).empty().append(
          ...data.itemListElement.map(Resume.TEMPLATES.xSkill.render, Resume.TEMPLATES.xSkill) // i.e. `(item) => Resume.TEMPLATES.xSkill.render(item)`
        )
      })
      new xjs.HTMLUListElement(document.querySelector('#skills .o-List--print')).populate(Array.from(document.querySelector('.o-Grid--skillGroups').querySelectorAll('dt.o-Grid__Item')), function (frag, data) {
        frag.querySelector('li').innerHTML = data.innerHTML
      })

    ;(function () {
      let templateEl = document.querySelector('template#experience')
      const xPositionGroup = new xjs.HTMLTemplateElement(templateEl).setRenderer(function (frag, data) {
        frag.querySelector('.o-Grid__Item--exp').id = data.identifier
        frag.querySelector('.c-ExpHn').textContent = data.name
          new xjs.HTMLUListElement(frag.querySelector('ul.o-List')).populate(data.itemListElement, function (f, d) {
            new xjs.HTMLLIElement(f.querySelector('li')).empty().append(Resume.TEMPLATES.xPosition.render(d))
          })
      })
      templateEl.after(
        new xjs.DocumentFragment(document.createDocumentFragment())
          .append(...(this._DATA.$positions || []).map(xPositionGroup.render, xPositionGroup)) // i.e. `(group) => xPositionGroup.render(group)`
          .node
      )
    }).call(this)

    ;(function () {
      let templateEl = document.querySelector('template#achievements')
      const xAchivementGroup = new xjs.HTMLTemplateElement(templateEl).setRenderer(function (frag, data) {
        frag.querySelector('.o-Grid__Item--exp').id = data.id
        frag.querySelector('.c-ExpHn').textContent = data.title
        new xjs.HTMLDListElement(frag.querySelector('.o-ListAchv')).empty()
          .replaceClassString('{{ classes }}', data.classes || '')
          .append(
            ...data.list.map(data.xComponent.render, data.xComponent) // i.e. `(item) => data.xComponent.render(item)`
          )
      })
      templateEl.after(
        new xjs.DocumentFragment(document.createDocumentFragment())
          .append(...[
            {
              title  : 'Profes­sional Dev­elopment', // NOTE invisible soft hyphens here! // `Profes&shy;sional Dev&shy;elopment`
              id     : 'prof-dev',
              list   : this._DATA.$prodevs || [],
              xComponent: Resume.TEMPLATES.xProdev,
            },
            {
              title  : 'Awards & Member­ships', // NOTE `Awards &amp; Member&shy;ships`
              id     : 'awards',
              list   : this._DATA.$awards || [],
              xComponent: Resume.TEMPLATES.xAward,
            },
            {
              title  : 'Team Athletic Experience',
              id     : 'athletic',
              classes: 'h-Hr',
              list   : this._DATA.$teams  || [],
              xComponent: Resume.TEMPLATES.xAward,
            }
          ].map(xAchivementGroup.render, xAchivementGroup)) // i.e. `(group) => xAchivementGroup.render(group)`
          .node
      )
    }).call(this)


    return dom.serialize()
  }
}

/**
 * @summary A set of component builders.
 * @namespace
 */
Resume.TEMPLATES = {
  /**
   * @summary A low-level skill with a subjective proficiency level.
   * @example
   * const {xSkill} = require('./Resume.class.js').TEMPLATES
   * document.querySelector('dl').append(
   *   xSkill.render({ "@type": "Rating" })
   * )
   * @see xSkill_renderer
   * @type {xjs.HTMLTemplateElement}
   */
  xSkill: require('../tpl/x-skill.tpl.js'),
  /**
   * @summary A working position while employed at an organization.
   * @example
   * const {xPosition} = require('./Resume.class.js').TEMPLATES
   * document.querySelector('li').append(
   *   xSkill.render({ "@type": "JobPosting" })
   * )
   * @see xPosition_renderer
   * @type {xjs.HTMLTemplateElement}
   */
  xPosition: require('../tpl/x-position.tpl.js'),
  /**
   * @summary Professional development hours.
   * @example
   * const {xProdev} = require('./Resume.class.js').TEMPLATES
   * document.querySelector('dl').append(
   *   xProdev.render({ "@type": "Event" })
   * )
   * @see xProdev_renderer
   * @type {xjs.HTMLTemplateElement}
   */
  xProdev: require('../tpl/x-prodev.tpl.js'),
  /**
   * @summary An award earned.
   * @example
   * const {xAward} = require('./Resume.class.js').TEMPLATES
   * document.querySelector('dl').append(
   *   xProdev.render({dates, text})
   * )
   * @see xAward_renderer
   * @type {xjs.HTMLTemplateElement}
   */
  xAward: require('../tpl/x-award.tpl.js'),
  /**
   * @summary A degree earned from a college or university.
   * @example
   * const {xDegree} = require('./Resume.class.js').TEMPLATES
   * document.querySelector('dl').append(
   *   xDegree.render({year, gpa, field})
   * )
   * @see xDegree_renderer
   * @type {xjs.HTMLTemplateElement}
   */
  xDegree: require('../tpl/x-degree.tpl.js'),
  /**
   * @summary Markup representing a city, town, or municipality.
   * @example
   * const {xCity} = require('./Resume.class.js').TEMPLATES
   * document.querySelector('span').append(
   *   xCity.render({ "@type": "Place" })
   * )
   * @see xCity_renderer
   * @type {xjs.HTMLTemplateElement}
   */
  xCity: require('../tpl/x-city.tpl.js'),
}

module.exports = Resume
