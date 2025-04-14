const { getArgumentType } = require('./utils/getArgumentType');

const htmlTypeFunc = {
  undefined() {
    return this[0].innerHTML;
  },
  string(argument) {
    this.each((_, elem) => {
      elem.innerHTML = argument;
    });
  },
  function(argument) {
    this.each((_, elem) => {
      const htmlContent = argument.call(elem, _, elem.innerHTML);

      elem.innerHTML = htmlContent;
    });
  },
};

function html(argument) {
  const argumentType = getArgumentType.call(this, argument);

  const result = htmlTypeFunc[argumentType]?.call(this, argument);

  return result ?? this;
}

module.exports = { html };
