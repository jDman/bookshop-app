Bookshop.Views = Bookshop.Views || {};
(function () {
    'use strict';

	Bookshop.Views.book = Backbone.View.extend({

    template: JST['app/scripts/templates/book.ejs'],

    tagName: 'li',

    className: 'book',

    initialize: function(){
      this.render();
    },

    render: function(response){
      this.$el.html(this.template(this.model.toJSON()));

      return this;
    }

});

})();
