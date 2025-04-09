function addElements(collection) {
  collection.forEach((el, i) => {
    this[i] = el;
    this._lastIndex = i;
  });
}

function _initElements(selectorOrElement) {
  if (typeof selectorOrElement === 'string') {
    const collection = document.querySelectorAll(selectorOrElement);
    addElements.call(this, collection);
  } else if (selectorOrElement instanceof HTMLElement) {
    this[0] = selectorOrElement;
  } else {
    addElements.call(this, Array.from(selectorOrElement));
  }
}

module.exports = { _initElements };
