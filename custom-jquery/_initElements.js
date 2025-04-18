const { getArgumentType } = require('./utils/getArgumentType');

function addElements(collection) {
  collection.forEach((el, i) => {
    this[i] = el;
    this._lastIndex = i;
  });
}

const _initElementsFuncs = {
  string(selectorOrElement) {
    const collection = document.querySelectorAll(selectorOrElement);
    addElements.call(this, collection);
  },
  element(selectorOrElement) {
    this[0] = selectorOrElement;
  },
  other(selectorOrElement) {
    addElements.call(this, Array.from(selectorOrElement));
  },
};

function _initElements(selectorOrElement) {
  const argumentType = getArgumentType.call(this, selectorOrElement);

  const funcName = argumentType in _initElementsFuncs ? argumentType : 'other';

  _initElementsFuncs[funcName].call(this, selectorOrElement);
}

module.exports = { _initElements };
