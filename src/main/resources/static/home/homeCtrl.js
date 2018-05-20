/**
 * Created by daka on 3/30/18.
 */

(function (angular) {
    'use strict';
    angular
        .module('HCIApp')
        .controller('homeCtrl', homeCtrl);

        homeCtrl.$inject = ['$scope', '$http','$location'];

         function homeCtrl($scope, $http, $location) {
            var vm = this;
            console.log("homeCtrl1");

            var loc = $location.url();
            var realdate =  loc.substr(loc.length - 11);

            $scope.datum = realdate;
            $scope.selected = {};
            $scope.show = 5;
            $scope.loaded = false;
            $scope.courseList = [];

             var loadAllSchedules = function () {
                 var promise = $http.get("/api/home/schedules");
                 promise.then(function (response) {
                     $scope.schedules = response.data;
                     console.log("All Schedules loaded",response.data);
                     loadCourses();
                 });
             };

            var loadSchedule = function () {

                var promise = $http.get("/api/home/schedule/" + $scope.datum);
                promise.then(function (response) {
                    if(response.data){
                        console.log("Schedule was found!");
                        $scope.lists = [];
                        $scope.loaded = true;
                        for(var time in response.data["timePeriodList"]){
                            $scope.lists.push(response.data["timePeriodList"][time]);
                        };
                    }else{
                        $scope.lists = [
                            {
                                ordertime: 1,
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
                            {   ordertime: 2,
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

                            {   ordertime: 3,
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
                                ordertime: 4,
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
                            {   ordertime: 5,
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
                    };

                    loadAllSchedules();

                });
            };

            loadSchedule();

            $scope.items = [];
            $scope.count = 0;

            $scope.$watch('lists', function(lists) {
                $scope.modelAsJson = angular.toJson(lists, true);

                saveSchedule();

            }, true);

            function saveSchedule() {

                $scope.data = {
                    "realdate": $scope.datum,
                    "timePeriodList": $scope.lists
                };
                if($scope.loaded){
                    var promise = $http.post("/api/home/schedule", $scope.data);
                    promise.then(function (response) {
                        //console.log("Sacuvano!");
                    });
                }else{
                    $scope.loaded = true;
                };
            };



            var loadCourses = function () {
                var promise = $http.get("/api/home/courseList");
                promise.then(function (response) {

                     for(var course in response.data){
                         var exist = checkCourse(response.data[course]["id"]);
                         if(exist == false){
                             $scope.courseList.push(response.data[course]);
                         };
                     };

                });
            };

            function checkCourse(course_id) {
                var status = false;

                 for(var schedule in $scope.schedules) {
                     for (var time in $scope.schedules[schedule]["timePeriodList"]) {
                         for (var classroom in $scope.schedules[schedule]["timePeriodList"][time]["classrooms"]) {
                             for (var course in $scope.schedules[schedule]["timePeriodList"][time]["classrooms"][classroom]["course"]) {
                                 if (($scope.schedules[schedule]["timePeriodList"][time]["classrooms"][classroom]["course"][course]["id"]) === course_id) {
                                     console.log(course_id);
                                     status = true;
                                 };
                             };
                         };
                     };
                 };

                return status;
            };



        };
}(angular));