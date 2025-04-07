function attr(attrName, attrValue) {
  if (attrName.toString() === '[object Object]') {
    Object.entries(attrName).forEach(([attrName, attrValue]) => {
      attr.call(this, attrName, attrValue);
    });
  }

  if (typeof attrValue === 'undefined') {
    return this.firstElement.getAttribute(attrName);
  }

  if (typeof attrValue === 'string') {
    this.elements.forEach((elem) => {
      elem.setAttribute(attrName, attrValue);
    });
  }

  if (typeof attrValue === 'function') {
    this.elements.forEach((elem, index) => {
      const newAttrValue = attrValue.call(
        elem,
        index,
        elem.getAttribute(attrName)
      );

      this.attr.call(this, attrName, newAttrValue);
    });
  }

  if (attrValue === null) {
    this.elements.forEach((elem) => {
      elem.removeAttribute(attrName);
    });
  }
}

module.exports = { attr };
