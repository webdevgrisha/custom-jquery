const { getArgumentType } = require("./utils/getArgumentType");

const appendTypeFuncs = {
  constructor(content) {
    this.each((_, elem) => {
      content.each((_, childElem) => {
        elem.append(childElem.cloneNode(true));
      });
    });
  },
  element(content) {
    this.each((_, elem) => {
      elem.append(content.cloneNode(true));
    });
  },
  string(content) {
    this.each((_, elem) => {
      elem.append(content);
    });
  },
  array(content) {
    const arrStr = content.join('');

    this.each((_, elem) => {
      elem.append(arrStr);
    });
  },
  unkown: () => {},
};

function append(content) {
  const contentType = getArgumentType.call(this, content);

  appendTypeFuncs[contentType]?.call(this, content);

  return this;
}

module.exports = { append };
