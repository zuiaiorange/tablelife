var youhuiTpl = require('../tpl/youhui.string');
SPA.defineView('youhui', {
  html:youhuiTpl,
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
