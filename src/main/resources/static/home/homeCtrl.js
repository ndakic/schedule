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
            $scope.show = 5;

            $scope.lists = [
                {
                    time: "7:00",
                    max: 5,
                    classrooms: [
                        {
                            classroom: "A1",
                            allowedTypes: ['linux', 'cross'],
                            max: 1,
                            course: [

                            ]
                        },
                        {
                            classroom: "A2",
                            allowedTypes: ['linux', 'cross'],
                            max: 1,
                            course: [

                            ]
                        },
                        {
                            classroom: "A3",
                            allowedTypes: ['linux', 'cross'],
                            max: 1,
                            course: [

                            ]
                        },
                        {
                            classroom: "A4",
                            allowedTypes: ['windows', 'cross'],
                            max: 1,
                            course: [

                            ]
                        },
                        {
                            classroom: "A5",
                            allowedTypes: ['windows', 'cross'],
                            max: 1,
                            course: [
                            ]
                        }
                    ]
                },
                {
                    time: "8:00",
                    max: 5,
                    classrooms: [
                        {
                            classroom: "A1",
                            allowedTypes: ['linux', 'cross'],
                            max: 1,
                            course: [

                            ]
                        },
                        {
                            classroom: "A2",
                            allowedTypes: ['cross', 'linux', 'windows'],
                            max: 1,
                            course: [

                            ]
                        },
                        {
                            classroom: "A3",
                            allowedTypes: ['linux', 'cross'],
                            max: 1,
                            course: [

                            ]
                        },
                        {
                            classroom: "A4",
                            allowedTypes: ['cross', 'linux', 'windows'],
                            max: 1,
                            course: [

                            ]
                        },
                        {
                            classroom: "A5",
                            allowedTypes: ['linux', 'cross'],
                            max: 1,
                            course: [
                            ]
                        }
                    ]
                },

                {
                    time: "9:00",
                    max: 5,
                    classrooms: [
                        {
                            classroom: "A1",
                            allowedTypes: ['windows', 'cross'],
                            max: 1,
                            course: [
                            ]
                        },
                        {
                            classroom: "A2",
                            allowedTypes: ['windows', 'cross'],
                            max: 1,
                            course: [

                            ]
                        },
                        {
                            classroom: "A3",
                            allowedTypes: ['windows', 'cross'],
                            max: 1,
                            course: [
                            ]
                        },
                        {
                            classroom: "A4",
                            allowedTypes: ['linux', 'cross'],
                            max: 1,
                            course: [

                            ]
                        },
                        {
                            classroom: "A5",
                            allowedTypes: ['linux', 'cross'],
                            max: 1,
                            course: [
                            ]
                        }
                    ]
                },
                {
                    time: "10:00",
                    max: 5,
                    classrooms: [
                        {
                            classroom: "A1",
                            allowedTypes: ['linux', 'cross'],
                            max: 1,
                            course: [
                            ]
                        },
                        {
                            classroom: "A2",
                            allowedTypes: ['linux', 'cross'],
                            max: 1,
                            course: [

                            ]
                        },
                        {
                            classroom: "A3",
                            allowedTypes: ['cross', 'linux', 'windows'],
                            max: 1,
                            course: [
                            ]
                        },
                        {
                            classroom: "A4",
                            allowedTypes: ['cross', 'linux', 'windows'],
                            max: 1,
                            course: [

                            ]
                        },
                        {
                            classroom: "A5",
                            allowedTypes: ['windows', 'cross'],
                            max: 1,
                            course: [
                            ]
                        }
                    ]
                },
                {
                    time: "11:00",
                    max: 5,
                    classrooms: [
                        {
                            classroom: "A1",
                            allowedTypes: ['windows', 'cross'],
                            max: 1,
                            course: [
                            ]
                        },
                        {
                            classroom: "A2",
                            allowedTypes: ['windows', 'cross'],
                            max: 1,
                            course: [

                            ]
                        },
                        {
                            classroom: "A3",
                            allowedTypes: ['windows', 'cross'],
                            max: 1,
                            course: [
                            ]
                        },
                        {
                            classroom: "A4",
                            allowedTypes: ['linux', 'cross'],
                            max: 1,
                            course: [

                            ]
                        },
                        {
                            classroom: "A5",
                            allowedTypes: ['linux', 'cross'],
                            max: 1,
                            course: [
                            ]
                        }
                    ]
                }
            ];

            $scope.items = []

            $scope.count = 0;
            // Model to JSON for demo purpose
            $scope.$watch('lists', function(lists) {
                $scope.modelAsJson = angular.toJson(lists, true);

                // console.log("===============================================");
                // for(var time in $scope.lists){
                //     var t = $scope.lists[time]["time"];
                //     console.log(t);
                //     for(var classroom in $scope.lists[time]["classrooms"]){
                //         var room = $scope.lists[time]["classrooms"][classroom]["classroom"];
                //         console.log(room);
                //         for(var course in $scope.lists[time]["classrooms"][classroom]["course"]){
                //             console.log($scope.lists[time]["classrooms"][classroom]["course"][course]);
                //         }
                //     }
                // }
                // console.log("===============================================");


            }, true);


        });
}(angular));