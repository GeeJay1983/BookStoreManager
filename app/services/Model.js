(function () {
    'use strict';

    var serviceId = 'model';

    angular.module('app').factory(serviceId, [model]);

    function model() {
        return {
            Book: Book
        };
    }

    function Book() {
        this.Id = 0;
        this.title = "";
        this.author = "";
        this.price = 0;
    }
})();