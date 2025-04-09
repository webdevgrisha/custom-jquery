function data(name, value) {
  const element = this[0];

  if (name === undefined) {
    return element.dataset;
  }

  if (typeof name === 'string' && value === undefined) {
    return element.dataset[name];
  }

  if (typeof name === 'string') {
    this.attr(`data-${name}`, value);
  }

  if (name.toString() === '[object Object]') {
    Object.entries(name).forEach(([dataName, dataValue]) => {
      this.data(dataName, dataValue);
    });
  }

  return this;
}

module.exports = { data };
