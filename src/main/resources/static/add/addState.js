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
        }).state('addSoftware', {
            parent: 'app',
            url: '/addSoftware',
            data: {
                authorities: []
            },
            views: {
                'content@': {
                    templateUrl: 'add/addSoftware.html',
                    controller: 'addCtrl',
                    controllerAs: 'vm'
                }
            }
        }).state('course-detail', {
            parent: 'app',
            url: '/course/{id}',
            data: {
                authorities: [],
                pageTitle: 'Course'
            },
            views: {
                'content@': {
                    templateUrl: 'add/details/courseDetails.html',
                    controller: 'DetailsCtrl',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                entity: ['$stateParams', 'Course', function($stateParams, Course) {
                    return Course.get({id : $stateParams.id}).$promise;
                }],
                previousState: ["$state", function ($state) {
                    var currentStateData = {
                        name: $state.current.name || 'course-detail',
                        params: $state.params,
                        url: $state.href($state.current.name, $state.params)
                    };
                    return currentStateData;
                }]
            }
        }).state('department-detail', {
            parent: 'app',
            url: '/department/{id}',
            data: {
                authorities: [],
                pageTitle: 'Department'
            },
            views: {
                'content@': {
                    templateUrl: 'add/details/departmentDetails.html',
                    controller: 'DetailsCtrl',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                entity: ['$stateParams', 'Department', function($stateParams, Department) {
                    return Department.get({id : $stateParams.id}).$promise;
                }],
                previousState: ["$state", function ($state) {
                    var currentStateData = {
                        name: $state.current.name || 'department-detail',
                        params: $state.params,
                        url: $state.href($state.current.name, $state.params)
                    };
                    return currentStateData;
                }]
            }
        }).state('software-detail', {
            parent: 'app',
            url: '/software/{id}',
            data: {
                authorities: [],
                pageTitle: 'Software'
            },
            views: {
                'content@': {
                    templateUrl: 'add/details/softwareDetails.html',
                    controller: 'DetailsCtrl',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                entity: ['$stateParams', 'Software', function($stateParams, Software) {
                    return Software.get({id : $stateParams.id}).$promise;
                }],
                previousState: ["$state", function ($state) {
                    var currentStateData = {
                        name: $state.current.name || 'software-detail',
                        params: $state.params,
                        url: $state.href($state.current.name, $state.params)
                    };
                    return currentStateData;
                }]
            }
        });
    }
})();