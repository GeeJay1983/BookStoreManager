(function () {
    'use strict';

    var serviceId = 'datacontext';
    angular.module('app').factory(serviceId, ['common', '$http', datacontext]);

    function datacontext(common, $http) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(serviceId);
        var logError = getLogFn(serviceId, 'error');

        var $q = common.$q;
        var baseUrl = 'http://localhost:49352/';

        var service = {
            getFeaturedBooks: getFeaturedBooks,
            getMessageCount: getMessageCount,
            saveNewBook: saveNewBook
        };

        return service;

        function saveNewBook(book) {
            return $http.post(baseUrl + "Book", book)
            .then(function (result) {
                book.id = result.data.id;
                log("succes, saved! ", +JSON.stringify(book))
            },
            function (data, status) {
                logError("New Book Save Failed!");
            });
        }

        function getMessageCount() { return $q.when(72); }

        function getFeaturedBooks() {
            var featuredBooks = [
                { title: 'War and Peace', author: 'Tolstoy', price: 25, description: '' },
                { title: 'The Hours', author: 'Cunningham', price: 17, description: '' },
                { title: 'The Trial', author: 'Kafka', price: 21, description: '' },
                { title: 'Neuromancer', author: 'Gibson', price: 18, description: '' },
                { title: 'Snow Crash', author: 'Stephenson', price: 18, description: '' },
                { title: 'Goedel, Escher, Bach', author: 'Hofstadter', price: 11, description: '' },
                { title: "Darwin's Dangerous Idea", author: 'Dennett', price: 35, description: '' }
            ];
            return $q.when(featuredBooks);
        }
    }
})();