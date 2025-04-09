function html(argument) {
  if (argument === undefined) {
    return this[0].innerHTML;
  } else if (typeof argument === 'string') {
    this.each((_, elem) => {
      elem.innerHTML = argument;
    });
  } else if (typeof argument === 'function') {
    this.each((_, elem) => {
      const htmlContent = argument.call(elem, _, elem.innerHTML);

      elem.innerHTML = htmlContent;
    });
  }

  return this;
}

module.exports = { html };
