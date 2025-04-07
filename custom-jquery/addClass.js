function filterClassNames(classNames) {
  if (typeof classNames === 'string') {
    return classNames.split(' ');
  }

  if (Array.isArray(classNames)) {
    return classNames.filter((className) => typeof className === 'string');
  }

  return [];
}

function addClass(argument) {
  if (typeof argument === 'function') {
    this.elements.forEach((elem, index) => {
      const classNames = argument.call(elem, index, elem.className);

      const classNamesArr = filterClassNames(classNames);

      elem.classList.add(...classNamesArr);
    });
  } else {
    this.elements.forEach((elem) => {
      const classNamesArr = filterClassNames(argument);
      elem.classList.add(...classNamesArr);
    });
  }

  return this;
}

module.exports = { addClass };
