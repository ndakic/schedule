/**
 * Created by daka on 5/19/18.
 */


(function() {
    'use strict';
    angular
        .module('HCIApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('calendar', {
            parent: 'app',
            url: '/calendar',
            data: {
                authorities: []
            },
            views: {
                'content@': {
                    templateUrl: 'calendar/calendar.html',
                    controller: 'calendarCtrl',
                    controllerAs: 'vm'
                }
            }
        });
    }


})();