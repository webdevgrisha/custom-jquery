const { getArgumentType } = require('./utils/getArgumentType');

function addElemEvent(element, eventName, data, callback, options = {}) {
  element.addEventListener(
    eventName,
    (event) => {
      event.data = data;

      callback(event);
    },
    options
  );
}

function parceConfig(configArr) {
  if (typeof configArr[2] === 'function') {
    return {
      selector: configArr[0],
      data: configArr[1],
      callback: configArr[2],
      options: configArr[3],
    };
  }

  if (typeof configArr[1] === 'function') {
    return {
      data: configArr[0],
      callback: configArr[1],
      options: configArr[2],
    };
  }

  return { selector: configArr[0], data: configArr[1], options: configArr[2] };
}

const onTypeFuncs = {
  object(selector, eventName, data, _, options) {
    const elements = this.children(selector);

    elements.each((_, element) => {
      Object.entries(eventName).forEach(([eventName, callback]) => {
        addElemEvent(element, eventName, data, callback, options);
      });
    });
  },
  string(selector, eventName, data, callback, options) {
    const elements = this.children(selector);

    elements.each((_, element) => {
      addElemEvent(element, eventName, data, callback, options);
    });
  },
  undefined(_, eventName, data, callback, options) {
    this.each((_, element) => {
      addElemEvent(element, eventName, data, callback, options);
    });
  },
};

function on(eventName, ...config) {
  const { selector, data, callback, options } = parceConfig(config);
  const eventNameType = getArgumentType.call(this, eventName);
  const selectorType = getArgumentType.call(this, selector);

  const funcName = eventNameType === 'object' ? eventNameType : selectorType;

  onTypeFuncs[funcName]?.call(
    this,
    selector,
    eventName,
    data,
    callback,
    options
  );

  return this;
}

module.exports = { on };
