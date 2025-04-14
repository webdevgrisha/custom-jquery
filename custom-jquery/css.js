const { getArgumentType } = require('./utils/getArgumentType');

const cssTypeFuncs = {
  string(element, argument, styleValue) {
    if (styleValue === undefined) {
      return element.style[argument];
    }

    element.style[argument] = styleValue;
  },
  function(_, argument, styleValue) {
    this.each((index, elem) => {
      const newStyleValue = styleValue.call(elem, index, elem.style[argument]);
      elem.style[argument] = newStyleValue;
    });
  },
  array(element, argument) {
    return argument.reduce((obj, propName) => {
      obj[propName] = element.style[propName];

      return obj;
    }, {});
  },
  object(_, argument) {
    this.each((_, elem) => {
      Object.entries(argument).forEach(([styleName, styleValue]) => {
        elem.style[styleName] = styleValue;
      });
    });
  },
};

function css(argument, styleValue) {
  const element = this[0];

  const argumentType = getArgumentType.call(this, argument);
  const styleValueType = getArgumentType.call(this, styleValue);

  const funcName =
    styleValueType === 'function' ? styleValueType : argumentType;

  const result = cssTypeFuncs[funcName].call(
    this,
    element,
    argument,
    styleValue
  );

  return result ?? this;
}

module.exports = { css };
