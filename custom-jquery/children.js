function children(selector) {
  let collection = null;
  const element = this[0];

  if (typeof selector === 'string') {
    collection = element.querySelectorAll(selector);
  } else {
    collection = element.children;
  }

  const childrenCollection = new this.constructor(collection);

  return childrenCollection;
}

module.exports = { children };
