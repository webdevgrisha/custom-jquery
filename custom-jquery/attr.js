function attr(attrName, attrValue) {
  if (attrName.toString() === '[object Object]') {
    Object.entries(attrName).forEach(([attrName, attrValue]) => {
      attr.call(this, attrName, attrValue);
    });
  }

  if (typeof attrValue === 'undefined') {
    return this[0].getAttribute(attrName);
  }

  if (typeof attrValue === 'string') {
    this.each((_, elem) => {
      elem.setAttribute(attrName, attrValue);
    });
  }

  if (typeof attrValue === 'function') {
    this.each((index, elem) => {
      const newAttrValue = attrValue.call(
        elem,
        index,
        elem.getAttribute(attrName)
      );

      this.attr.call(this, attrName, newAttrValue);
    });
  }

  if (attrValue === null) {
    this.each((_, elem) => {
      elem.removeAttribute(attrName);
    });
  }
}

module.exports = { attr };
