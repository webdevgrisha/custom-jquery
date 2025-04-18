const { getArgumentType } = require('./utils/getArgumentType');

const dataTypeFunc = {
  undefined(element) {
    return element.dataset;
  },
  string(element, name, value) {
    if (value === undefined) {
      return element.dataset[name];
    }

    this.attr(`data-${name}`, value);
  },
  object(_, name) {
    Object.entries(name).forEach(([dataName, dataValue]) => {
      this.data(dataName, dataValue);
    });
  },
};

function data(name, value) {
  const element = this[0];

  const nameType = getArgumentType.call(this, name);

  const result = dataTypeFunc[nameType]?.call(this, element, name, value);

  return result ?? this;
}

module.exports = { data };
