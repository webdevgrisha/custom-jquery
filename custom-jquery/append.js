function append(content) {
  if (content instanceof this.constructor) {
    this.elements.forEach((elem) => {
      content.elements.forEach((childElem) => {
        elem.append(childElem.cloneNode(true));
      });
    });
  } else if (content instanceof HTMLElement) {
    this.elements.forEach((elem) => {
      elem.append(content.cloneNode(true));
    });
  } else if (typeof content === 'string') {
    this.elements.forEach((elem) => {
      elem.append(content);
    });
  } else if (Array.isArray(content)) {
    const arrStr = content.join('');

    this.elements.forEach((elem) => {
      elem.append(arrStr);
    });
  }

  return this;
}

module.exports = { append };
