Bookshop.Views = Bookshop.Views || {};
(function () {
  'use strict';

  Bookshop.Views.filter = Backbone.View.extend({

    template: JST['app/scripts/templates/filter.ejs'],

    tagName: 'ul',

    id: 'filters',

    initialize: function(){
      this.render();
      this.books = Bookshop.booksView.collection;
    },
    events:{

        'click #ratedHighToLow': 'highToLow',
        'click #ratedLowToHigh': 'lowToHigh',
        'click #priceHighToLow': 'priceHighToLow',
        'click #priceLowToHigh': 'priceLowToHigh'

    },

    highToLow: function(event){
        event.preventDefault();
        this.books = Bookshop.booksView.collection.sortBy("rating").reverse();
        Bookshop.booksView.collection.reset(this.books);
        Bookshop.booksView.render();
    },

    lowToHigh: function(event){
        event.preventDefault();
        this.books = Bookshop.booksView.collection.sortBy("rating");
        Bookshop.booksView.collection.reset(this.books);
        Bookshop.booksView.render();
    },

    priceHighToLow: function(event){
        event.preventDefault();
        this.books = Bookshop.booksView.collection.sortBy("price").reverse();
        Bookshop.booksView.collection.reset(this.books);
        Bookshop.booksView.render();
    },
    priceLowToHigh: function(event){
        event.preventDefault();
        this.books = Bookshop.booksView.collection.sortBy("price");
        Bookshop.booksView.collection.reset(this.books);
        Bookshop.booksView.render();
    },


    render: function(response){
      $('#filterPanel').append(this.$el.html(this.template()));

      return this;
    }

});

})();
