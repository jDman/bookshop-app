Bookshop.Models = Bookshop.Models || {};
(function () {
    'use strict';

	Bookshop.Models.book = Backbone.Model.extend({
    parse: function(response, options){
      return response;
    }
  });

})();
