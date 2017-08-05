var Element = require('./Element.class.js')

/**
 * An award I’ve earned.
 * @module
 */
module.exports = class Award {
  /**
   * Construct a new Award object.
   * @param {string} dates date(s) relevant to the award
   * @param {string} text  custom HTML string defining this award
   */
  constructor(dates, text) {
    this._dates = dates
    this._text  = text
  }

  /**
   * Render an award in HTML.
   * @return {string} HTML string
   */
  html() {
    return [
      new Element('dt').class('o-ListAchv__Award').attr('itemprop','award').addContent(this._text),
      new Element('dd').class('o-ListAchv__Date').addContent(this._dates),
    ].map((el) => el.render()).join('')
  }

}
