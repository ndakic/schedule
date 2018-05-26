/**
 * Created by daka on 3/30/18.
 */

(function() {
    'use strict';
    angular
        .module('HCIApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('day', {
            parent: 'app',
            url: '/day/{id}',
            data: {
                authorities: []
            },
            views: {
                'content@': {
                    templateUrl: 'day/day.html',
                    controller: 'dayCtrl',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                entity: ['$stateParams', 'Day', function($stateParams, Day) {
                    return Day.get({id : $stateParams.id}).$promise;
                }]
            }
        });
    }


})();