function get(index) {
  if (index === undefined) {
    return this.elements;
  }

  index = +index;

  if (!Number.isNaN(index) && index >= 0) {
    return this.elements[index];
  }

  if (index < 0) {
    return this.elements.at(index);
  }
}

module.exports = { get };
