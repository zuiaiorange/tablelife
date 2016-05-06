var tplIndex = require('../tpl/index.string');
SPA.defineView('index', {
    html: tplIndex,
    plugins: ['delegated'],
    modules: [{
        name: 'indexContent',
        container: '.m-index-body',
        views: ['home', 'sort', 'buycar', 'maindata', 'gonglue'],
        defaultTag: 'home'
    }],

    init: {
      setActive: function (tag) {
        $('[data-tag="' + tag + '"]').addClass("active").siblings().removeClass("active");
      }
    },

    bindActions: {
        'tap.switch': function(el, data) {
            this.modules.indexContent.launch(data.tag);
            this.setActive(data.tag);
        }
    },

    bindEvents: {
        'beforeShow': function() {

        }
    }
});
