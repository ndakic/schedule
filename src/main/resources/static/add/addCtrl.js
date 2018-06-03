/**
 * Created by daka on 5/27/18.
 */

(function (angular) {
    'use strict';
    angular
        .module('HCIApp')
        .controller('addCtrl', addCtrl);

    addCtrl.$inject = ['$scope', '$http', 'Alertify'];

    function addCtrl($scope, $http, Alertify) {
        var vm = this;
        vm.newDepartment = newDepartment;
        vm.deleteDepartment = deleteDepartment;
        vm.checkDeleteDepartment = checkDeleteDepartment;
        vm.checkDeleteClassroom = checkDeleteClassroom;
        vm.addClassroom = addClassroom;
        vm.deleteClassroom = deleteClassroom;
        vm.addCourse = addCourse;
        vm.checkDeleteCourse = checkDeleteCourse;
        vm.deleteCourse = deleteCourse;
        vm.addSoftware = addSoftware;
        vm.deleteSoftware = deleteSoftware;
        vm.checkDeleteSoftware = checkDeleteSoftware;


        $scope.department = {
            "id": ""
        };
        $scope.classroom = {
            "projector" : false,
            "basicTable": false,
            "smartTable": false,
            "software": {"id": "IDJ"}
        };

        $scope.course = {
            "id": "",
            'label' : "",
            'title': "",
            'duration': 45,
            'department' : {"id": "SIIT"},
            'os' : "linux"
        };

        $scope.software = {
            "os": "linux",
        };


        $scope.yesNo = [true, false];
        $scope.os_options = ['windows', 'linux', 'cross'];
        $scope.durationOptions = [45, 90, 180];
        $scope.groupSize = [20, 30, 45];
        $scope.department_options = [];
        $scope.software_options = [];
        $scope.all_classrooms = [];
        $scope.selected_os = "cross";

        var loadDepartments= function () {
            var promise = $http.get("/api/home/departments");
            promise.then(function (response) {
                $scope.departments = response.data;

                for(var depart in response.data)
                    $scope.department_options.push(response.data[depart].id);

            });
        };

        loadDepartments();


        var loadSoftwares= function () {
            var promise = $http.get("/api/home/softwares");
            promise.then(function (response) {
                $scope.softwares = response.data;

                for(var soft in response.data)
                    $scope.software_options.push(response.data[soft].id);

            });
        };

        loadSoftwares();

        var loadUniqueClassrooms= function () {
            var promise = $http.get("/api/home/allUniqueClassrooms");
            promise.then(function (response) {
                $scope.unique_classrooms = response.data;
            });
        };

        loadUniqueClassrooms();

        var loadCourses = function () {
            var promise = $http.get("/api/home/courseList");
            promise.then(function (response) {
                $scope.courses = response.data;
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
            });
        };

        loadAllClassrooms();
        
        function checkDeleteClassroom(classrooms) {
            var status = true;

            for(var room in $scope.all_classrooms){
                if($scope.all_classrooms[room].classroom == classrooms && $scope.all_classrooms[room]["course"].length > 0)
                    return false;
            }

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

        function addCourse() {
            var promise = $http.post("/api/home/addCourse", $scope.course);
            promise.then(function (response) {
                if(response.status == "200"){
                    Alertify.success("Course added!");
                    loadCourses();
                    $scope.course = {
                        "id": "",
                        'label' : "",
                        'title': "",
                        'duration': 45,
                        'department' : {"id": "SIIT"},
                        'os' : "linux"

                    };
                }
                else{
                    Alertify.error('Course already exist!');
                }
            });
        }

        function checkDeleteCourse(course) {

            var status = true;

            for(var room in $scope.all_classrooms)
                for(var cour in $scope.all_classrooms[room].course)
                    if($scope.all_classrooms[room].course[cour].id == course.id)
                        status = false;


            return status;

        }

        function deleteCourse(course) {
            var promise = $http.post("/api/home/deleteCourse", course);
            promise.then(function (response) {
                if(response.status == "200"){
                    Alertify.success("Course deleted!");
                    loadCourses();
                }
                else{
                    Alertify.error('Error!');
                }
            });
        }

        function addSoftware() {
            var promise = $http.post("/api/home/addSoftware", $scope.software);
            promise.then(function (response) {
                if(response.status == "200"){
                    Alertify.success("Software added!");
                    loadSoftwares();
                    $scope.software = {
                        "os": "linux",
                    };
                }
                else{
                    Alertify.error('Software already exist!');
                }
            });
        }

        function deleteSoftware(software) {
            var promise = $http.post("/api/home/deleteSoftware", software);
            promise.then(function (response) {
                if(response.status == "200"){
                    Alertify.success("Software deleted!");
                    loadSoftwares();
                }
                else{
                    Alertify.error('Error!');
                }
            });
        };

        function checkDeleteSoftware(software) {

            var status = true;

            console.log(software);

            for(var cour in $scope.courses)
                if($scope.courses[cour].softwareNeed)
                    if($scope.courses[cour].softwareNeed.id == software.id)
                        status = false;

            if($scope.softwares.length < 4)
                status = false;


            return status;

        }

    };
}(angular));