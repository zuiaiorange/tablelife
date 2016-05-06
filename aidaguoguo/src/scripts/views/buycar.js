var tplBuyCar=require('../tpl/buycar.string');
SPA.defineView('buycar',{
  html:tplBuyCar,
  plugins: ['delegated'],
  bindActions: {
    'goto.home': function () {
      var view = this.parentView;
      view.modules.indexContent.launch('home');
      view.setActive('home');
    }
  }
});
