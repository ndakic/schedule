/**
 * Created by daka on 5/24/18.
 */

(function (angular) {
    angular.module('HCIApp')
        .controller('weekCtrl', function($scope, $http){
            var vm = this;
            vm.checkSettings = checkSettings;
            vm.checkClassroomSize = checkClassroomSize;


            var insertData = function () {
                var promise = $http.get("/api/home/insertData");
                promise.then(function (response) {
                    console.log("Insert Data!");
                });
            };

            insertData();

            var loadClassrooms = function () {
                var promise = $http.get("/api/home/getClassroomSettings");
                promise.then(function (response) {
                    $scope.classroomSettings = response.data;
                });
            };

            loadClassrooms();

            var loadDepartments= function () {
                var promise = $http.get("/api/home/departments");
                promise.then(function (response) {
                    $scope.departments = response.data;
                });
            };

            loadDepartments();

            function checkSettings(classrooom) {
                for(var room in $scope.classroomSettings){
                    if($scope.classroomSettings[room]["id"] == classrooom){
                        return $scope.classroomSettings[room]["status"];
                    }
                }
            }
            

            var loadAllDays = function () {
                var promise = $http.get("/api/day/days");
                promise.then(function (response) {
                    $scope.days = response.data;
                });
            };
            loadAllDays();
            
            
            function checkClassroomSize(classrooms) {

                var status = false;

                for(var room in classrooms)
                    if(classrooms[room].course.length == 1)
                        status = true;


                return status;

            }

        });
}(angular));