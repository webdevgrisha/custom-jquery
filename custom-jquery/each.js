function each(callback) {
  let currIndex = 0;

  for (let value of this) {
    const result = callback.call(value, currIndex++, value);

    if (result === false) break;
  }
}

module.exports = { each };
