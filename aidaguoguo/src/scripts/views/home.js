var tplHome=require('../tpl/home.string');


SPA.defineView('home',{
  html:tplHome,
  plugins: ['delegated',{
    name:"avalon",
    options:function(vm){
        vm.keyword="abc";
    }
  }],

  init:{
    getData: function(vm){
      $.ajax({
        url:"/aidaguoguo/api/dataList.do",
        type: "get",
        success:function(res){
          console.log(res);
        }
      });
    }
  },

  bindEvents: {
    'beforeShow': function () {
      var that = this;
      var vm = that.getVM();
      that.getData(vm);
      var mySwiper = new Swiper('.swiper-container',{
        autoplay: 1000,
        loop:true,
        pagination: '.swiper-pagination'
      });
    }
  },
  bindActions:{
    'detail-page':function(){
      console.log(1);
      SPA.open("detail");
    }
  }
});
