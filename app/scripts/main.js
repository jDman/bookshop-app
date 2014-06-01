/*global Bookshop, $*/
//= require foundation


window.Bookshop = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        'use strict';
        this.books = new Bookshop.Collections.books();
        this.booksView = new Bookshop.Views.books({collection: this.books});
        this.filterView = new Bookshop.Views.filter();
    }
};

$(document).ready(function () {
    'use strict';

    Bookshop.init();

});
