function hasClass(className) {
  let isHasClass = false;

  this.each((_, element) => {
    const result = element.classList.contains(className);

    if (result) {
      isHasClass = true;
      return false;
    }
  });

  return isHasClass;
}

module.exports = { hasClass };
