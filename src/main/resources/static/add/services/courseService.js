/**
 * Created by daka on 6/2/18.
 */


(function() {
    'use strict';
    angular
        .module('HCIApp')
        .factory('Course', Course);

    Course.$inject = ['$resource', '$state'];

    function Course ($resource, $state) {
        var resourceUrl =  'api/home/course/:id';

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