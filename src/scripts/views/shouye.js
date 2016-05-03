var tplShouye = require('../tpl/shouye.string');

SPA.defineView('shouye', {
  html:tplShouye,
  plugins: ['delegated',{
    name:"avalon",
    options:function(vm){
      vm.datalist=[];
    }
  }],

  bindActions:{
    'show.newshop': function () {
      SPA.open('newshop');
    },
    'show.shipu': function () {
      SPA.open('shipu');
    },
    'show.youhui': function () {
      SPA.open('youhui');
    },
    'show.msjshuo': function () {
      SPA.open('msjshuo');
    },

  },
  bindEvents: {
    'beforeShow':function () {
        // var myScroll = new IScroll('#index-scroll');
        var self = this;
        this.mySwiper = new Swiper('#shouye-swiper', {
          loop: false,
          touchRatio : 0.5,
          pagination : '.swiper-pagination',
          autoplay:1000,
          autoplayDisableOnInteraction:false,
        });

        var vm = this.getVM();
        $.ajax({
          url:"/tablelife/api/dataList.do",
          type:"get",
          success:function(res){
            vm.datalist = res;
          }
        });

    }
  }
});
