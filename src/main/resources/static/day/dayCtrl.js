/**
 * Created by daka on 3/30/18.
 */

(function (angular) {
    'use strict';
    angular
        .module('HCIApp')
        .controller('dayCtrl', dayCtrl);

        dayCtrl.$inject = ['$scope', '$http','$location', 'Alertify', 'entity'];

         function dayCtrl($scope, $http, $location, Alertify, entity) {
            var vm = this;
            vm.checkSettings = checkSettings;
            $scope.entity = entity;

            $scope.selected = {};
            $scope.courseList = [];
            $scope.show = 5;
            $scope.searchedTerm = "";
            $scope.lists = entity.timePeriodList;
            $scope.autocompleteOptions = ["ON", "OFF"];
            $scope.autocomplete = "ON";


            function saveDay() {
                $scope.data = {
                    "id": entity.id,
                    "dayorder": entity.dayorder,
                    "timePeriodList": $scope.lists
                };

                var promise = $http.post("/api/day/saveDay", $scope.data);
                promise.then(function (response) {
                    console.log("Sacuvano!");
                });

            };

            var loadCourses = function () {
                var promise = $http.get("/api/home/courseList");
                promise.then(function (response) {
                     for(var course in response.data){
                         if(checkExist(response.data[course]) == false){
                             $scope.courseList.push(response.data[course]);
                         }
                     };
                });
            };

            loadCourses();

            function checkExist(course) {
                 var status = false;
                 for(var co in $scope.courseList)
                     if($scope.courseList[co].id == course.id)
                         status = true;

                return status;

             }

            $scope.logEvent = function(message, course) {
                 $scope.draggedCourse = course;
             };

            $scope.logListEvent = function(action, index, external, type, classroom, time, order) {

                 var calc_addition = ($scope.draggedCourse.duration - 15)/15;
                 var count = 0;

                 if($scope.autocomplete === "ON"){
                     out: for(var time in $scope.lists){
                         if($scope.lists[time]["ordertime"] > order && $scope.lists[time]["ordertime"] <= order + calc_addition){
                             console.log($scope.lists[time]["ordertime"]);
                             for(var room in $scope.lists[time]["classrooms"]){
                                 if($scope.lists[time]["classrooms"][room]["classroom"] == classroom){
                                     console.log("room: ", $scope.lists[time]["classrooms"][room]);

                                     if($scope.lists[time]["classrooms"][room]["course"].length == 0){
                                         if(count != 2)
                                             $scope.lists[time]["classrooms"][room]["course"].push($scope.draggedCourse);

                                         count++;
                                         if(count == 2)
                                             calc_addition++;
                                     }else{
                                         console.log("BREAK: ", $scope.lists[time]["classrooms"][room]["course"]);
                                         break out;
                                     }
                                 };
                             };
                         };
                     };
                 };

                 saveDay();
             };

             var loadClassrooms = function () {
                 var promise = $http.get("/api/home/getClassroomSettings");
                 promise.then(function (response) {
                     $scope.classroomSettings = response.data;
                 });
             };

             loadClassrooms();

             function checkSettings(classrooom) {

                 var status = false;

                 for(var room in $scope.classroomSettings){
                     if($scope.classroomSettings[room]["id"] == classrooom){
                         return $scope.classroomSettings[room]["status"];
                     }
                 }
             }

        };
}(angular));