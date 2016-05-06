var tplGongLue=require('../tpl/gonglue.string');
SPA.defineView('gonglue',{
  html:tplGongLue,
  plugins:["delegated"],
  init:{
    GoLueSwiper:null
  },
  bindActions:{
      'swper-switch':function(e){
            var index=$(e.el).index();
            console.log(index);
            this.GoLueSwiper.slideTo(index);
      }
  },
  bindEvents: {
    'beforeShow': function () {
      var that=this;
       this.GoLueSwiper=new Swiper(".gonglue-swiper",{
         loop:false,
                onSlideChangeStart: function () {
            $('.qxwatch i').eq(that.GoLueSwiper.activeIndex).addClass("active").siblings().removeClass("active");

                }
      });
    }
  }
});
