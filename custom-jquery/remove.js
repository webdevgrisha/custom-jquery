function remove() {
  this.each((_, element) => element.remove());
}

module.exports = { remove };
