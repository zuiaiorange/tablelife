
var  tplDetail=require('../tpl/detail.string');
SPA.defineView("detail",{
  html:tplDetail,
  plugins:['delegated'],
  bindEvents:{
    'beforeShow':function(){
      var DetailSwiper=new Swiper(".detail-swiper",{
          pagination : '.swiper-pagination'
      });
    }
  },
  bindActions:{
    'toHide':function(){
      this.hide();
    },
    'openBuyCar':function(){
      this.hide();
      // getView获得视图
      SPA.getView('index', function (view) {
        view.modules.indexContent.launch('maindata');
        view.setActive('maindata');
      });
    }
  }
});
