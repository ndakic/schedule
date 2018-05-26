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
            if(status){

                var min = countClasses();
                if(min < 3)
                    $scope.minimum = false;
                if(min >= 3){
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


    };
}(angular));