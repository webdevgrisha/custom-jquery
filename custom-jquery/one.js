function one(eventName, ...config) {
  const options = {
    once: true,
  };

  this.on(eventName, ...config, options);

  return this;
}

module.exports = { one };
