/**
 * Created by daka on 3/30/18.
 */

(function (angular) {
    'use strict';
    angular
        .module('HCIApp')
        .controller('homeCtrl', homeCtrl);

        homeCtrl.$inject = ['$scope', '$http','$location', 'Alertify'];

         function homeCtrl($scope, $http, $location, Alertify) {
            var vm = this;
            vm.deleteAll = deleteAll;

            console.log("homeCtrl1");

            var loc = $location.url();
            var realdate =  loc.substr(loc.length - 11);

            $scope.datum = realdate;
            $scope.selected = {};
            $scope.show = 5;
            $scope.loaded = false;
            $scope.test = {};$scope.courseList = [];

            $scope.searchedTerm = "";

             var loadAllSchedules = function () {
                 var promise = $http.get("/api/home/schedules");
                 promise.then(function (response) {
                     $scope.schedules = response.data;
                     console.log("All Schedules loaded",response.data);
                     loadCourses();
                 });
             };

              function deleteAll() {
                 var promise = $http.get("/api/home/deleteAllData");
                 promise.then(function (response) {
                    console.log("Deleted");
                     loadSchedule();
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
                                        allowedTypes: ['windows', 'cross'],
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
                                        allowedTypes: ['cross', 'linux', 'windows'],
                                        max: 1,
                                        course: [
                                        ]
                                    }
                                ]
                            },
                            {   ordertime: 2,
                                time: "7:15",
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
                                        allowedTypes: ['windows', 'cross'],
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
                                        allowedTypes: ['cross', 'linux', 'windows'],
                                        max: 1,
                                        course: [
                                        ]
                                    }
                                ]
                            },

                            {   ordertime: 3,
                                time: "7:30",
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
                                        allowedTypes: ['windows', 'cross'],
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
                                        allowedTypes: ['cross', 'linux', 'windows'],
                                        max: 1,
                                        course: [
                                        ]
                                    }
                                ]
                            },
                            {
                                ordertime: 4,
                                time: "07:45",
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
                                        allowedTypes: ['windows', 'cross'],
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
                                        allowedTypes: ['cross', 'linux', 'windows'],
                                        max: 1,
                                        course: [
                                        ]
                                    }
                                ]
                            },
                            {   ordertime: 5,
                                time: "08:00",
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
                                        allowedTypes: ['windows', 'cross'],
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
                                        allowedTypes: ['cross', 'linux', 'windows'],
                                        max: 1,
                                        course: [
                                        ]
                                    }
                                ]
                            },
                            {   ordertime: 6,
                                time: "08:15",
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
                                        allowedTypes: ['windows', 'cross'],
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
                                        allowedTypes: ['cross', 'linux', 'windows'],
                                        max: 1,
                                        course: [
                                        ]
                                    }
                                ]
                            },
                            {   ordertime: 7,
                                time: "08:30",
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
                                        allowedTypes: ['windows', 'cross'],
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
                                        allowedTypes: ['cross', 'linux', 'windows'],
                                        max: 1,
                                        course: [
                                        ]
                                    }
                                ]
                            },
                            {   ordertime: 8,
                                time: "08:45",
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
                                        allowedTypes: ['windows', 'cross'],
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
                                        allowedTypes: ['cross', 'linux', 'windows'],
                                        max: 1,
                                        course: [
                                        ]
                                    }
                                ]
                            },
                            {   ordertime: 9,
                                time: "09:00",
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
                                        allowedTypes: ['windows', 'cross'],
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
                                        allowedTypes: ['cross', 'linux', 'windows'],
                                        max: 1,
                                        course: [
                                        ]
                                    }
                                ]
                            },
                            {   ordertime: 10,
                                time: "09:15",
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
                                        allowedTypes: ['windows', 'cross'],
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
                                        allowedTypes: ['cross', 'linux', 'windows'],
                                        max: 1,
                                        course: [
                                        ]
                                    }
                                ]
                            },
                            {   ordertime: 11,
                                time: "09:30",
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
                                        allowedTypes: ['windows', 'cross'],
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
                                        allowedTypes: ['cross', 'linux', 'windows'],
                                        max: 1,
                                        course: [
                                        ]
                                    }
                                ]
                            },
                            {   ordertime: 12,
                                time: "09:45",
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
                                        allowedTypes: ['windows', 'cross'],
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
                                        allowedTypes: ['cross', 'linux', 'windows'],
                                        max: 1,
                                        course: [
                                        ]
                                    }
                                ]
                            },
                            {   ordertime: 13,
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
                                        allowedTypes: ['windows', 'cross'],
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
                                        allowedTypes: ['cross', 'linux', 'windows'],
                                        max: 1,
                                        course: [
                                        ]
                                    }
                                ]
                            },
                            {   ordertime: 14,
                                time: "10:15",
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
                                        allowedTypes: ['windows', 'cross'],
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
                                        allowedTypes: ['cross', 'linux', 'windows'],
                                        max: 1,
                                        course: [
                                        ]
                                    }
                                ]
                            },
                            {   ordertime: 15,
                                time: "10:30",
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
                                        allowedTypes: ['windows', 'cross'],
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
                                        allowedTypes: ['cross', 'linux', 'windows'],
                                        max: 1,
                                        course: [
                                        ]
                                    }
                                ]
                            },
                            {   ordertime: 16,
                                time: "10:45",
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
                                        allowedTypes: ['windows', 'cross'],
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
                                        allowedTypes: ['cross', 'linux', 'windows'],
                                        max: 1,
                                        course: [
                                        ]
                                    }
                                ]
                            },
                            {   ordertime: 16,
                                time: "11:00",
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
                                        allowedTypes: ['windows', 'cross'],
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
                                        allowedTypes: ['cross', 'linux', 'windows'],
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

            // $scope.$watch('lists', function(lists) {
            //     $scope.modelAsJson = angular.toJson(lists, true);
            //     // saveSchedule();
            //
            // }, true);

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
                         if(checkExist(response.data[course]) == false)
                            $scope.courseList.push(response.data[course]);
                     };
                });
            };

            // function checkCourse(course_id) {
            //     var status = false;
            //
            //      for(var schedule in $scope.schedules) {
            //          for (var time in $scope.schedules[schedule]["timePeriodList"]) {
            //              for (var classroom in $scope.schedules[schedule]["timePeriodList"][time]["classrooms"]) {
            //                  for (var course in $scope.schedules[schedule]["timePeriodList"][time]["classrooms"][classroom]["course"]) {
            //                      if (($scope.schedules[schedule]["timePeriodList"][time]["classrooms"][classroom]["course"][course]["id"]) === course_id) {
            //                          status = true;
            //                      };
            //                  };
            //              };
            //          };
            //      };
            //
            //     return status;
            // };
            
             function checkExist(course) {

                 var status = false;
                 for(var co in $scope.courseList)
                     if($scope.courseList[co].id == course.id)
                         status = true;
                //console.log();
                return status;

             }

             $scope.dragoverCallback = function(index, external, type, callback) {
                 $scope.logListEvent('dragged over', index, external, type);
                 // Invoke callback to origin for container types.
                 if (type == 'container' && !external) {
                     console.log('Container being dragged contains ' + callback() + ' items');
                 }
                 return index < 10; // Disallow dropping in the third row.
             };

             $scope.dropCallback = function(index, item, external, type) {
                 $scope.logListEvent('dropped at', index, external, type);
                 // Return false here to cancel drop. Return true if you insert the item yourself.
                 return item;
             };

             $scope.logEvent = function(message, course) {
                 $scope.draggedCourse = course;
                 console.log(message, course);
             };

             $scope.logListEvent = function(action, index, external, type, classroom, time, order) {
                 var message = external ? 'External ' : '';
                 message += 'course ' + $scope.draggedCourse.id + ' duration ' + $scope.draggedCourse.duration + ' type ' + type + ' element was ' + action + ' position ' + index + ' classroom ' + classroom + ' time ' + time + ' dan ' + $scope.datum + ' ordertime ' + order;
                 console.log(message);

                 var calc_addition = ($scope.draggedCourse.duration - 15)/15;
                 console.log("Treba dodati: " + calc_addition);

                 // for(var time in $scope.lists){
                 //    if($scope.lists[time]["ordertime"] > order && $scope.lists[time]["ordertime"] <= order + calc_addition){
                 //        console.log($scope.lists[time]["ordertime"]);
                 //        for(var room in $scope.lists[time]["classrooms"]){
                 //            if($scope.lists[time]["classrooms"][room]["classroom"] == classroom){
                 //                console.log("room: ", $scope.lists[time]["classrooms"][room]);
                 //                if($scope.lists[time]["classrooms"][room]["course"].length == 0)
                 //                    $scope.lists[time]["classrooms"][room]["course"].push($scope.draggedCourse);
                 //                else{
                 //                    //Alertify.error("Ne moze!");
                 //                    break;
                 //                }
                 //            }
                 //        }
                 //    };
                 // };

                 saveSchedule();

             };

        };
}(angular));