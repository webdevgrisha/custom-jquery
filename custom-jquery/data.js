function data(name, value) {
  const element = this.firstElement;

  if (name === undefined) {
    return element.dataset;
  }

  if (typeof name === 'string' && value === undefined) {
    console.log(element.dataset[name]);

    return this.elements[0].dataset[name];
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
