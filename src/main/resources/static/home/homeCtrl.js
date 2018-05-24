/**
 * Created by daka on 3/30/18.
 */

(function (angular) {
    'use strict';
    angular
        .module('HCIApp')
        .controller('homeCtrl', homeCtrl);

        homeCtrl.$inject = ['$scope', '$http','$location', 'Alertify', 'entity'];

         function homeCtrl($scope, $http, $location, Alertify, entity) {
            var vm = this;
            console.log("entity", entity);
            $scope.entity = entity;

            $scope.selected = {};
            $scope.courseList = [];
            $scope.show = 5;
            $scope.searchedTerm = "";
            $scope.lists = entity.timePeriodList;

            function saveSchedule() {
                console.log("Save started!");
                $scope.data = {
                    "day": entity.day,
                    "dayorder": entity.dayorder,
                    "timePeriodList": $scope.lists
                };

                var promise = $http.post("/api/home/schedule", $scope.data);
                promise.then(function (response) {
                    console.log("Sacuvano!");
                });

            };

            var loadCourses = function () {
                var promise = $http.get("/api/home/courseList");
                promise.then(function (response) {
                     for(var course in response.data){
                         if(checkExist(response.data[course]) == false){
                             console.log(response.data[course]);
                             $scope.courseList.push(response.data[course]);
                         }
                     };

                    console.log("lista", $scope.courseList);
                });
            };

            loadCourses();

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