/**
 * Created by daka on 5/24/18.
 */

(function() {
    'use strict';
    angular
        .module('HCIApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('week', {
            parent: 'app',
            url: '/',
            data: {
                authorities: []
            },
            views: {
                'content@': {
                    templateUrl: 'week/week.html',
                    controller: 'weekCtrl',
                    controllerAs: 'vm'
                }
            }
        });
    }


})();