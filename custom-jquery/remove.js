function remove() {
  this.each((_, element) => element.remove());
  this._lastIndex = 0;

  return this;
}

module.exports = { remove };
