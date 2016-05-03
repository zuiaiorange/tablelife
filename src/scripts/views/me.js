var tplMe = require('../tpl/me.string');
SPA.defineView('me', {
  html:tplMe,
  bindEvents: {
    'beforeShow':function () {
        // var myScroll = new IScroll('#index-scroll');
    }
  }
});
