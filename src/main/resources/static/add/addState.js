/**
 * Created by daka on 5/27/18.
 */


(function() {
    'use strict';
    angular
        .module('HCIApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('addDepartment', {
            parent: 'app',
            url: '/addDepartment',
            data: {
                authorities: []
            },
            views: {
                'content@': {
                    templateUrl: 'add/addDepartment.html',
                    controller: 'addCtrl',
                    controllerAs: 'vm'
                }
            }
        }).state('addClassroom', {
            parent: 'app',
            url: '/addClassroom',
            data: {
                authorities: []
            },
            views: {
                'content@': {
                    templateUrl: 'add/addClassroom.html',
                    controller: 'addCtrl',
                    controllerAs: 'vm'
                }
            }
        }).state('addCourse', {
            parent: 'app',
            url: '/addCourse',
            data: {
                authorities: []
            },
            views: {
                'content@': {
                    templateUrl: 'add/addCourse.html',
                    controller: 'addCtrl',
                    controllerAs: 'vm'
                }
            }
        });
    }
})();