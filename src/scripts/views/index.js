var tplIndex = require('../tpl/index.string');
SPA.defineView('index', {
  html:tplIndex,

  plugins: ['delegated'],

  modules:[{
    name:'indexContent',
    container:'.m-index-body',
    views:['fenlei', 'shipu','cart', 'me', 'shouye'],
    defaultTag:'shouye'
  }],

  bindActions:{
    'tap.switch':function(e,data){
      this.modules.indexContent.launch(data.tag);
      $(e.el).addClass("active").siblings().removeClass("active")
    }

  },
  bindEvents:{
    'beforeShow':function(){

    }
  }
});
