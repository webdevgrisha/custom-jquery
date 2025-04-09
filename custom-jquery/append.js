function append(content) {
  if (content instanceof this.constructor) {
    this.each((_, elem) => {
      content.each((_, childElem) => {
        elem.append(childElem.cloneNode(true));
      });
    });
  } else if (content instanceof HTMLElement) {
    this.each((_, elem) => {
      elem.append(content.cloneNode(true));
    });
  } else if (typeof content === 'string') {
    this.each((_, elem) => {
      elem.append(content);
    });
  } else if (Array.isArray(content)) {
    const arrStr = content.join('');

    this.each((_, elem) => {
      elem.append(arrStr);
    });
  }

  return this;
}

module.exports = { append };
