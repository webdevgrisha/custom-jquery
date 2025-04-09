function get(index) {
  if (index === undefined) {
    return Array.from(this);
  }

  index = +index;

  if (!Number.isNaN(index) && index >= 0) {
    return this[index];
  }

  if (index < 0) {
    const newIndex = this.length + index;

    return this[newIndex];
  }
}

module.exports = { get };
