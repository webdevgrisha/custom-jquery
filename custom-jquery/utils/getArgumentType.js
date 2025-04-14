function getArgumentType(content) {
  if (content instanceof this.constructor) {
    return 'constructor';
  } else if (content instanceof HTMLElement) {
    return 'element';
  } else if (typeof content === 'string') {
    return 'string';
  } else if (Array.isArray(content)) {
    return 'array';
  } else if (content?.toString() === '[object Object]') {
    return 'object';
  } else if (typeof content === 'function') {
    return 'function';
  } else if (content === undefined) {
    return undefined;
  } else if(content === null) {
    return null;
  }else {
    return 'unkown';
  }
}

module.exports = { getArgumentType };
