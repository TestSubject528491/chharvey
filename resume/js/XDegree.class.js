class XDegree extends HTMLElement {
  constructor() {
    super()
    this._field = this.querySelector('field').innerHTML
    this._year  = this.getAttribute('year')
    this._gpa   = this.getAttribute('gpa')

    let frag = XDegree.TEMPLATE.content.cloneNode(true)
    frag.querySelector('[itemprop="name"]'       ).innerHTML   = this._field
    frag.querySelector('[itemprop="ratingValue"]').textContent = this._gpa
    frag.querySelector('[itemprop="timeEarned"]' ).textContent = this._year
    if (this._year > 0) {
      frag.querySelectorAll('.o-ListAchv__Date')[1].remove()
    } else {
      frag.querySelectorAll('.o-ListAchv__Date')[0].remove()
    }

    this.parentNode.appendChild(frag)
    this.remove()
  }
  static get TEMPLATE() {
    return document.querySelector('link[rel="import"][href$="x-degree.tpl.html"]').import.querySelector('template')
  }
}

module.exports = XDegree
