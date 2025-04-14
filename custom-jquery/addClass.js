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
  const isArgumentFunc = typeof argument === 'function';

  this.each((index, elem) => {
    let classNames = argument;

    if (isArgumentFunc) {
      classNames = argument.call(elem, index, elem.className);
    }

    const classNamesArr = filterClassNames(classNames);

    elem.classList.add(...classNamesArr);
  });

  return this;
}

module.exports = { addClass };
