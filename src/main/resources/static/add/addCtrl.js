/**
 * Created by daka on 5/27/18.
 */

(function (angular) {
    'use strict';
    angular
        .module('HCIApp')
        .controller('addCtrl', settingsCtrl);

    settingsCtrl.$inject = ['$scope', '$http','$location', 'Alertify'];

    function settingsCtrl($scope, $http, $state, Alertify) {
        var vm = this;
        vm.newDepartment = newDepartment;
        vm.deleteDepartment = deleteDepartment;
        vm.checkDelete = checkDelete;
        vm.addClassroom = addClassroom;


        $scope.department = {};
        $scope.classroom = {
            "classroom" : ""
        };
        $scope.selected_os = "";
        $scope.os_options = ['windows', 'linux', 'cross'];

        var loadDepartments= function () {
            var promise = $http.get("/api/home/departments");
            promise.then(function (response) {
                $scope.departments = response.data;
            });
        };

        loadDepartments();

        var loadUniqueClassrooms= function () {
            var promise = $http.get("/api/home/allClassrooms");
            promise.then(function (response) {
                $scope.unique_classrooms = response.data;
                console.log($scope.unique_classrooms);
            });
        };

        loadUniqueClassrooms();

        var loadCourses = function () {
            var promise = $http.get("/api/home/courseList");
            promise.then(function (response) {
                $scope.courses = response.data;
                console.log("courses: ", response.data);
            });
        };

        loadCourses();

        function newDepartment() {
            if($scope.department.color != null){
                var promise = $http.post("/api/home/addDepartment", $scope.department);
                promise.then(function (response) {
                    if(response.status == "200"){
                        Alertify.success("Department added!");
                        loadDepartments();
                    }
                    else{
                        Alertify.error('Department id already exist!');
                    }
                });
            }else{
                Alertify.error("Choose color!");
            }
        };

        function deleteDepartment(department) {
            var promise = $http.post("/api/home/deleteDepartment", department);
            promise.then(function (response) {
                if(response.status == "200"){
                    Alertify.success("Department deleted!");
                    loadDepartments();
                }
                else{
                    Alertify.error('Error!');
                }
            });
        };

        function checkDelete(department) {

            var status = true;

            for(var course in $scope.courses){
                if($scope.courses[course]["department"].id == department.id)
                    status = false;
            }

            return status;

        }
        
        function addClassroom() {

            $scope.classroom.allowedTypes = [$scope.selected_os];

            console.log($scope.classroom);

            if($scope.classroom.allowedTypes != ""){
                var promise = $http.post("/api/home/addClassroom", $scope.classroom);
                promise.then(function (response) {
                    if(response.status == "200"){
                        Alertify.success("Classroom added!");
                        loadUniqueClassrooms();
                    }
                    else{
                        Alertify.error('Classroom label already exist!');
                    }
                });
            }else{
                Alertify.error("Choose OS!");
            }

        }

    };
}(angular));