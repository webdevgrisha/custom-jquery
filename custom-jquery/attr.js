const { getArgumentType } = require('./utils/getArgumentType');

const attrTypeFuncs = {
  object(attrName) {
    Object.entries(attrName).forEach(([attrName, attrValue]) => {
      attr.call(this, attrName, attrValue);
    });
  },
  undefined(attrName) {
    return this[0].getAttribute(attrName);
  },
  string(attrName, attrValue) {
    this.each((_, elem) => {
      elem.setAttribute(attrName, attrValue);
    });
  },
  function(attrName, attrValue) {
    this.each((index, elem) => {
      const newAttrValue = attrValue.call(
        elem,
        index,
        elem.getAttribute(attrName)
      );

      this.attr.call(this, attrName, newAttrValue);
    });
  },
  null(attrName) {
    this.each((_, elem) => {
      elem.removeAttribute(attrName);
    });
  },
};

function attr(attrName, attrValue) {
  const attrNameType = getArgumentType.call(this, attrName);
  const attrValueType = getArgumentType.call(this, attrValue);

  let funcName = null;
  
  if (
    (attrNameType === 'string' && attrValueType === undefined) ||
    attrValueType === null
  ) {
    funcName = attrValueType;
  } else {
    funcName = attrValueType ?? attrNameType;
  }

  const result = attrTypeFuncs[funcName]?.call(this, attrName, attrValue);

  return result ?? this;
}

module.exports = { attr };
