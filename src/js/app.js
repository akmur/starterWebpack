const app = (() => {
  function init() {
    console.log('logging works');
  }

  return {
    init,
  };
})();

module.exports = app;
