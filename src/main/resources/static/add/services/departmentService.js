/**
 * Created by daka on 6/3/18.
 */


(function() {
    'use strict';
    angular
        .module('HCIApp')
        .factory('Department', Department);

    Department.$inject = ['$resource', '$state'];

    function Department ($resource, $state) {
        var resourceUrl =  'api/home/department/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    if (data)
                        data = angular.fromJson(data);

                    return data;
                }
            },
            'update': { method:'PUT' }
        });
    }
})();