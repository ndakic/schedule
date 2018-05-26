/**
 * Created by daka on 5/24/18.
 */

(function() {
    'use strict';
    angular
        .module('HCIApp')
        .factory('Day', Day);

    Day.$inject = ['$resource', '$state'];

    function Day ($resource, $state) {
        var resourceUrl =  '/api/day/:id';

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