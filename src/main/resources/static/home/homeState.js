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
        $stateProvider.state('schedule', {
            parent: 'app',
            url: '/schedule/{id}',
            data: {
                authorities: []
            },
            views: {
                'content@': {
                    templateUrl: 'home/home.html',
                    controller: 'homeCtrl',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                entity: ['$stateParams', 'Schedule', function($stateParams, Schedule) {
                    return Schedule.get({id : $stateParams.id}).$promise;
                }]
            }
        });
    }


})();