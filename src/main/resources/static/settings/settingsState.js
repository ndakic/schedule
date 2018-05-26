/**
 * Created by daka on 5/26/18.
 */


(function() {
    'use strict';
    angular
        .module('HCIApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('settings', {
            parent: 'app',
            url: '/settings',
            data: {
                authorities: []
            },
            views: {
                'content@': {
                    templateUrl: 'settings/settings.html',
                    controller: 'settingsCtrl',
                    controllerAs: 'vm'
                }
            }
        });
    }


})();