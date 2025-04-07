class ChildrenCollection {
  constructor(elements) {
    this.elements = Array.from(elements);
  }

  each(callback) {
    this.elements.forEach((childElem, index) => callback(index, childElem));
  }

  get length() {
    return this.elements.length;
  }
}

function children(selector) {
  let collection = null;
  const element = this.firstElement;

  if (typeof selector === 'string') {
    collection = element.querySelectorAll(selector);
  } else {
    collection = element.children;
  }

  const childrenCollection = new ChildrenCollection(collection);

  return childrenCollection;
}

module.exports = { children };
