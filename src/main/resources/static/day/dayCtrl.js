/**
 * Created by daka on 3/30/18.
 */

(function (angular) {
    'use strict';
    angular
        .module('HCIApp')
        .controller('dayCtrl', dayCtrl);

        dayCtrl.$inject = ['$scope', '$http', 'Alertify', 'entity'];

         function dayCtrl($scope, $http, Alertify, entity) {
            var vm = this;
            vm.checkSettings = checkSettings;
            $scope.entity = entity;
            $scope.selected = {};
            $scope.courseList = [];
            $scope.show = 5;
            $scope.searchedTerm = "";
            $scope.lists = entity.timePeriodList;
            $scope.moved = false;
            $scope.insertPosition = [];

            var loadDay = function () {
                 var promise = $http.get("/api/day/" + $scope.entity.id);
                 promise.then(function (response) {
                     $scope.lists = response.data.timePeriodList;
                 });
             };

            function saveDay() {
                $scope.data = {
                    "id": entity.id,
                    "dayorder": entity.dayorder,
                    "timePeriodList": $scope.lists
                };

                var promise = $http.post("/api/day/saveDay", $scope.data);
                promise.then(function (response) {
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

                 if(message == 'Started1')
                     $scope.moved = true;

             };

            $scope.logListEvent = function(action, index, external, type, classroom, timePeriod, order) {

                $scope.already = true;

                if($scope.moved == false)
                    if(checkIfAlreadyAdded($scope.draggedCourse))
                        $scope.already = false;



                if(classroom != null && timePeriod != null){

                     var calc_addition = ($scope.draggedCourse.duration - 15)/15;
                     var count = 0;

                     var two_hours = false;

                     if(calc_addition > 2)
                         two_hours = true;

                     var status = true;

                    $scope.insertPosition.push(timePeriod);


                     out: for(var time in $scope.lists){
                         if($scope.lists[time]["ordertime"] > order && $scope.lists[time]["ordertime"] <= order + calc_addition){
                             for(var room in $scope.lists[time]["classrooms"]){
                                 if($scope.lists[time]["classrooms"][room]["classroom"] == classroom){
                                     if($scope.lists[time]["classrooms"][room]["course"].length == 0){
                                         if(count != 2){
                                             $scope.lists[time]["classrooms"][room]["course"].push($scope.draggedCourse);
                                             $scope.insertPosition.push($scope.lists[time]);
                                             $scope.insertClassroom = classroom;
                                         }


                                         count++;
                                         if(count == 2 && two_hours == true)
                                             calc_addition++;
                                     }else{
                                         Alertify.error("Course can't be dragged here. Try again.");
                                         status = false;
                                         break out;
                                     }
                                 };
                             };
                         };
                     };



                    if($scope.moved == true){

                        for(var time in $scope.lists)
                            for(var room in $scope.lists[time]["classrooms"])
                                if(checkTimePeriodsAndClassrooms($scope.lists[time], $scope.lists[time]["classrooms"][room]))
                                    if($scope.lists[time]["classrooms"][room]["course"].length == 1)
                                        if($scope.lists[time]["classrooms"][room]["course"][0].id == $scope.draggedCourse.id)
                                            $scope.lists[time]["classrooms"][room]["course"] = [];


                        $scope.moved = false;
                        $scope.insertPosition = [];
                    }

                    if(status && $scope.already)
                        saveDay();
                    else
                        loadDay();


                }else{

                    for(var time in $scope.lists)
                        for(var room in $scope.lists[time]["classrooms"])
                            for(var cour in $scope.lists[time]["classrooms"][room].course)
                                if($scope.lists[time]["classrooms"][room].course[cour].id == $scope.draggedCourse.id)
                                    $scope.lists[time]["classrooms"][room].course = [];

                    saveDay();
                }

             };

            // koje ne treba obrisati
             function checkTimePeriodsAndClassrooms(period, room) {

                 var status = true;

                 for(var per in $scope.insertPosition)
                     if($scope.insertPosition[per].time == period.time && room.classroom == $scope.insertClassroom)
                         status = false;


                 return status;
                 
             }

             function checkIfAlreadyAdded(course) {

                 var status = false;
                 var count = 0;

                 for(var time in $scope.lists)
                     for(var room in $scope.lists[time]["classrooms"])
                         for(var cour in $scope.lists[time]["classrooms"][room].course)
                             if($scope.lists[time]["classrooms"][room].course[cour].id == course.id)
                                 count++;



                 if(count > 1){
                     status = true;
                     Alertify.error("Course already added!");
                 }


                 return status;

             }

             $scope.dropCallback = function(index, item, external, type) {
                 $scope.logListEvent('dropped at', index, external, type);
                 // Return false here to cancel drop. Return true if you insert the item yourself.
                 return item;
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
                     };
                 };
             };

        };
}(angular));