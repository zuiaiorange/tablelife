var tplCart = require('../tpl/cart.string');
SPA.defineView('cart', {
  html:tplCart,
  bindEvents: {
    'beforeShow':function () {
        // var myScroll = new IScroll('#index-scroll');
    }
  }
});
