function html(argument) {
  if (argument === undefined) {
    return this.elements[0].innerHTML;
  } else if (typeof argument === 'string') {
    this.elements.forEach((elem) => {
      elem.innerHTML = argument;
    });
  } else if (typeof argument === 'function') {
    this.elements.forEach((elem, index) => {
      const htmlContent = argument.call(elem, index, elem.innerHTML);

      elem.innerHTML = htmlContent;
    });
  }

  return this;
}

module.exports = { html };
