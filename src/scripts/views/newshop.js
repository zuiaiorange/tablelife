var newshopTpl = require('../tpl/newshop.string');

SPA.defineView('newshop', {
  html: newshopTpl,

  plugins: ['delegated'],

  bindActions: {
    'tap.back': function () {
      this.hide();
    }
  },

  bindEvents: {
    'beforeShow': function () {
      console.log(0);
    }
  }
});
