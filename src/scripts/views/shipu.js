var tplShipu = require('../tpl/shipu.string');
SPA.defineView('shipu', {
  html:tplShipu,
  plugins: ['delegated'],
  bindActions: {
    'tap.back': function () {
      this.hide();
    }
  },
  bindEvents: {
    'beforeShow':function () {
        console.log(0);  // var myScroll = new IScroll('#index-scroll');
    }
  }
});
