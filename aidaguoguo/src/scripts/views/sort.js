var tplSort=require('../tpl/sort.string');
SPA.defineView('sort',{
  html:tplSort,
  bindAction:{
    'tap.switch':function(e,data){
      $(e.el).addClass('active').siblings().removeClass('active');

    }
  },
});
