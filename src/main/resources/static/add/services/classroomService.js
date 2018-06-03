/**
 * Created by daka on 6/3/18.
 */


(function() {
    'use strict';
    angular
        .module('HCIApp')
        .factory('Classroom', Classroom);

    Classroom.$inject = ['$resource', '$state'];

    function Classroom ($resource, $state) {
        var resourceUrl =  'api/home/classroom/:id';

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