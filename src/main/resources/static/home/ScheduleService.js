/**
 * Created by daka on 5/24/18.
 */

(function() {
    'use strict';
    angular
        .module('HCIApp')
        .factory('Schedule', Schedule);

    Schedule.$inject = ['$resource', '$state'];

    function Schedule ($resource, $state) {
        var resourceUrl =  '/api/home/schedule/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    if (data) {
                        data = angular.fromJson(data);

                    }
                    return data;
                }
            },
            'update': { method:'PUT' }
        });
    }
})();