var msjshuoTpl = require('../tpl/msjshuo.string');
SPA.defineView('msjshuo', {
  html:msjshuoTpl,
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
