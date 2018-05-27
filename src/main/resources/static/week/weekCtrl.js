/**
 * Created by daka on 5/24/18.
 */

(function (angular) {
    angular.module('HCIApp')
        .controller('weekCtrl', function($scope, $http){
            var vm = this;
            vm.checkSettings = checkSettings;
            vm.count = count;
            var count_view = 0;


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

            function checkSettings(classrooom) {
                //console.log("check");
                for(var room in $scope.classroomSettings){
                    if($scope.classroomSettings[room]["id"] == classrooom){
                        return $scope.classroomSettings[room]["status"];
                    }
                }
            }
            
            function count() {
                console.log("test");

                return true;
                
            }

            var loadAllDays = function () {
                var promise = $http.get("/api/day/days");
                promise.then(function (response) {
                    $scope.days = response.data;
                    console.log("days: ", $scope.days);
                });
            };
            loadAllDays();

        });
}(angular));