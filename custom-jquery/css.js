function css(argument, styleValue) {
  const element = this[0];

  if (typeof styleValue === 'string') {
    element.style[argument] = styleValue;
  }

  if (typeof styleValue === 'function') {
    this.each((index, elem) => {
      const newStyleValue = styleValue.call(elem, index, elem.style[argument]);
      elem.style[argument] = newStyleValue;
    });
  }

  if (typeof argument === 'string') {
    return element.style[argument];
  }

  if (Array.isArray(argument)) {
    return argument.reduce((obj, propName) => {
      obj[propName] = element.style[propName];

      return obj;
    }, {});
  }

  if (argument.toString() === '[object Object]') {
    this.each((_, elem) => {
      Object.entries(argument).forEach(([styleName, styleValue]) => {
        elem.style[styleName] = styleValue;
      });
    });
  }

  return this;
}

module.exports = { css };
