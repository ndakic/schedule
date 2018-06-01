/**
 * Created by daka on 5/27/18.
 */

(function (angular) {
    'use strict';
    angular
        .module('HCIApp')
        .controller('addCtrl', addCtrl);

    addCtrl.$inject = ['$scope', '$http','$location', 'Alertify'];

    function addCtrl($scope, $http, $state, Alertify) {
        var vm = this;
        vm.newDepartment = newDepartment;
        vm.deleteDepartment = deleteDepartment;
        vm.checkDeleteDepartment = checkDeleteDepartment;
        vm.checkDeleteClassroom = checkDeleteClassroom;
        vm.addClassroom = addClassroom;
        vm.deleteClassroom = deleteClassroom;


        $scope.department = {
            "id": ""
        };
        $scope.classroom = {
            "classroom" : ""
        };
        $scope.selected_os = "";
        $scope.os_options = ['windows', 'linux', 'cross'];

        $scope.all_classrooms = [];

        var loadDepartments= function () {
            var promise = $http.get("/api/home/departments");
            promise.then(function (response) {
                $scope.departments = response.data;
            });
        };

        loadDepartments();

        var loadUniqueClassrooms= function () {
            var promise = $http.get("/api/home/allUniqueClassrooms");
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

        function checkDeleteDepartment(department) {

            var status = true;

            for(var course in $scope.courses){
                if($scope.courses[course]["department"].id == department.id)
                    status = false;
            }

            return status;

        }

        var loadAllClassrooms= function () {
            var promise = $http.get("/api/home/classrooms");
            promise.then(function (response) {
                $scope.all_classrooms = response.data;
                console.log($scope.all_classrooms);
            });
        };

        loadAllClassrooms();
        
        function checkDeleteClassroom(classrooms) {
            var status = true;

            for(var room in $scope.all_classrooms){
                if($scope.all_classrooms[room].classroom == classrooms && $scope.all_classrooms[room]["course"].length > 0)
                    return false;
            }

            console.log("length: ", $scope.unique_classrooms.length);
            if($scope.unique_classrooms.length <= 5)
                status = false;

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
        
        function deleteClassroom(classroom) {
            var promise = $http.post("/api/home/deleteClassroom", classroom);
            promise.then(function (response) {
                if(response.status == "200"){
                    Alertify.success("Classroom deleted!");
                    loadUniqueClassrooms();
                }
                else{
                    Alertify.error('Error!');
                }
            });
        }

    };
}(angular));