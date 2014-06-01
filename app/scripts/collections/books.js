Bookshop.Collections = Bookshop.Collections || {};
(function () {
    'use strict';

	Bookshop.Collections.books = Backbone.Collection.extend({
		model: Bookshop.Models.book,
    url: 'scripts/books/books.json',
    parse: function(response){
      response = _.each(response, function(book){
        book.price = parseFloat(book.price);
      });
      return response;
    }
	});

})();
