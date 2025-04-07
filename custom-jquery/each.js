function each(callback) {
  for (let i = 0; i < this.elements.length; i++) {
    const result = callback.call(this.elements[i], i, this.elements[i]);

    if (result === false) break;
  }
}

module.exports = { each };
