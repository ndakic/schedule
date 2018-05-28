/**
 * Created by daka on 5/26/18.
 */

(function (angular) {
    'use strict';
    angular
        .module('HCIApp')
        .controller('settingsCtrl', settingsCtrl);

    settingsCtrl.$inject = ['$scope', '$http','$location', 'Alertify'];

    function settingsCtrl($scope, $http, $location, Alertify) {
        var vm = this;
        vm.deleteAllData = deleteAllData;

        $scope.colors = {Blue: true, Orange: true};
        $scope.classrooms = {};
        var status = false;
        $scope.minimum = true;


        var loadClassrooms = function () {
            var promise = $http.get("/api/home/getClassroomSettings");
            promise.then(function (response) {
                for(var room in response.data){
                    $scope.classrooms[response.data[room]["id"]] = response.data[room]["status"];
                }
                status = true;
            });
        };

        loadClassrooms();

        $scope.$watch('classrooms', function(classrooms) {
            console.log("watch");
            if(status){
                var min = countClasses();
                if(min < 5 || min > 5)
                    $scope.minimum = false;
                if(min === 5){
                    $scope.minimum = true;
                    console.log($scope.classrooms);
                    saveClassroomSettings();
                }
            }


        }, true);

        function countClasses() {
            var sum = 0;
            for(var room in $scope.classrooms)
                if($scope.classrooms[room] == true)
                    sum++;

            return sum;
        }

        function saveClassroomSettings() {

            for(var room in $scope.classrooms){

                var classroom = {
                    "id": room,
                    "status" : $scope.classrooms[room]
                }

                var promise = $http.post("/api/home/saveClassroomSettings", classroom);
                promise.then(function (response) {
                    console.log("Classroom settings saved!");
                });
            }
        };

        var insertData = function () {
            var promise = $http.get("/api/home/insertData");
            promise.then(function (response) {
                console.log("Insert Data!");

            });
        };


        function deleteAllData() {
            var status = confirm("Are you sure?");

            if(status){
                var promise = $http.get("/api/home/deleteAllData");
                promise.then(function (response) {
                    Alertify.success("All data has been deleted!");
                    insertData();
                    loadClassrooms();
                });
            };
        };

    };
}(angular));