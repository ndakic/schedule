/**
 * Created by daka on 3/30/18.
 */

(function (angular) {
    angular.module('HCIApp')
        .controller('homeCtrl', function($scope, $http){
            var vm = this;


            var loadClassrooms = function () {
                var promise = $http.get("/api/home/classroomList");
                promise.then(function (response) {
                    $scope.classroomList = response.data;
                });
            };

            loadClassrooms();


            var loadCourses = function () {
                var promise = $http.get("/api/home/courseList");
                promise.then(function (response) {
                    $scope.courseList = response.data;
                });
            };

            loadCourses();

            $scope.selected = {};

            $scope.lists = [
                {
                    label: "7:00",
                    max: 5,
                    classrooms: [
                        {
                            label: "A1",
                            allowedTypes: ['SIIT'],
                            max: 1,
                            course: [
                                {name: "HCI", type: "SIIT"},
                            ]
                        },
                        {
                            label: "A2",
                            allowedTypes: ['SIIT'],
                            max: 1,
                            course: [
                                {name: "PP", type: "SIIT"},
                            ]
                        },
                        {
                            label: "A3",
                            allowedTypes: ['SIIT'],
                            max: 1,
                            course: [
                                {name: "BSEP", type: "SIIT"},
                            ]
                        },
                        {
                            label: "A4",
                            allowedTypes: ['SIIT'],
                            max: 1,
                            course: [
                                {name: "NTP", type: "SIIT"},
                            ]
                        },
                        {
                            label: "A5",
                            allowedTypes: ['E2'],
                            max: 1,
                            course: [
                            ]
                        }
                    ]
                },
                {
                    label: "8:00",
                    max: 5,
                    classrooms: [
                        {
                            label: "A1",
                            allowedTypes: ['SIIT'],
                            max: 1,
                            course: [
                                {name: "HCI", type: "SIIT"},
                            ]
                        },
                        {
                            label: "A2",
                            allowedTypes: ['SIIT'],
                            max: 1,
                            course: [
                                {name: "PP", type: "SIIT"},
                            ]
                        },
                        {
                            label: "A3",
                            allowedTypes: ['E2'],
                            max: 1,
                            course: [
                                {name: "BSEP", type: "E2"},
                            ]
                        },
                        {
                            label: "A4",
                            allowedTypes: ['SIIT'],
                            max: 1,
                            course: [
                                {name: "NTP", type: "SIIT"},
                            ]
                        },
                        {
                            label: "A5",
                            allowedTypes: ['E2'],
                            max: 1,
                            course: [
                            ]
                        }
                    ]
                },

                {
                    label: "9:00",
                    max: 5,
                    classrooms: [
                        {
                            label: "A1",
                            allowedTypes: ['E2'],
                            max: 1,
                            course: [
                            ]
                        },
                        {
                            label: "A2",
                            allowedTypes: ['E2'],
                            max: 1,
                            course: [
                                {name: "PP", type: "E2"},
                            ]
                        },
                        {
                            label: "A3",
                            allowedTypes: ['SIIT'],
                            max: 1,
                            course: [
                            ]
                        },
                        {
                            label: "A4",
                            allowedTypes: ['SIIT'],
                            max: 1,
                            course: [
                                {name: "NTP", type: "SIIT"},
                            ]
                        },
                        {
                            label: "A5",
                            allowedTypes: ['SIIT'],
                            max: 1,
                            course: [
                            ]
                        }
                    ]
                }





            ];

            // Model to JSON for demo purpose
            $scope.$watch('lists', function(lists) {
                $scope.modelAsJson = angular.toJson(lists, true);
            }, true);


        });
}(angular));