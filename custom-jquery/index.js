const { _initElements } = require('./_initElements');
const { addClass } = require('./addClass');
const { append } = require('./append');
const { attr } = require('./attr');
const { children } = require('./children');
const { css } = require('./css');
const { data } = require('./data');
const { each } = require('./each');
const { get } = require('./get');
const { hasClass } = require('./hasClass');
const { html } = require('./html');
const { on } = require('./on');
const { one } = require('./one');
const { remove } = require('./remove');

function $(selectorOrElement) {
  if (new.target === undefined) {
    return new $(...arguments);
  }

  this._lastIndex = 0;

  Object.defineProperty(this, 'length', {
    get() {
      return this._lastIndex + 1;
    },
  });

  this[Symbol.iterator] = function () {
    let current = 0;
    let last = this._lastIndex;
    const $ = this;

    return {
      next() {
        if (current <= last) {
          return { value: $[current++], done: false };
        } else {
          return { done: true };
        }
      },
    };
  };

  this._initElements(selectorOrElement);
}

$.prototype._initElements = _initElements;

$.prototype.addClass = addClass;
$.prototype.append = append;
$.prototype.html = html;
$.prototype.attr = attr;
$.prototype.children = children;
$.prototype.css = css;
$.prototype.data = data;
$.prototype.on = on;
$.prototype.one = one;
$.prototype.each = each;
$.prototype.remove = remove;
$.prototype.hasClass = hasClass;
$.prototype.get = get;

module.exports = $;
