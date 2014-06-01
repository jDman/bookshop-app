Bookshop.Views = Bookshop.Views || {};
(function () {
    'use strict';

Bookshop.Views.books = Backbone.View.extend({

	el: '#bookStore',

  template: JST['app/scripts/templates/books.ejs'],

  initialize: function(){
    this.getCollection();
    this.render();
  },

  getCollection: function(){

    var that = this;
    that.collection.fetch({
      dataType: "json",
      success: function(response){
        console.log(response);
        that.render(response);
      },
      error: function(){console.log('Collection not found');}
    });

  },
  
  startFoundation: function(){
    $(document).foundation();
  },

  render: function(){
    var that = this;
    that.$el.empty();

    that.collection.each(function(books){
      var bookView = new Bookshop.Views.book({model:books});
      that.$el.append(bookView.el);
    });
    that.startFoundation();
    return this;
  }

});

})();
