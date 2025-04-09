function remove() {
  this.each((_, element) => element.remove());
  this._lastIndex = 0;
}

module.exports = { remove };
