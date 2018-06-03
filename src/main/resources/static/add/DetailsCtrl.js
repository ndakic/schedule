/**
 * Created by daka on 6/2/18.
 */

(function() {
    'use strict';

    angular
        .module('HCIApp')
        .controller('DetailsCtrl', DetailsCtrl);

    DetailsCtrl.$inject = ['$scope', 'entity', 'previousState', '$http'];

    function DetailsCtrl($scope, entity, previousState, $http) {
        var vm = this;
        vm.previousState = previousState.name;

        $scope.course = entity;
        $scope.department = entity;

        $scope.yesNo = [{value: true, "text": "yes"}, {value: false, "text": "no"}];
        $scope.os_options = ['windows', 'linux', 'cross'];
        $scope.durationOptions = [45, 90, 180];
        $scope.groupSize = [20, 30, 45];
        $scope.numberOfTerms = [1, 2, 3, 4, 5];

        var loadDepartments= function () {
            var promise = $http.get("/api/home/departments");
            promise.then(function (response) {
                $scope.departments = response.data;

            });
        };

        loadDepartments();

        var loadSoftwares= function () {
            var promise = $http.get("/api/home/softwares");
            promise.then(function (response) {
                $scope.softwares = response.data;

            });
        };

        loadSoftwares();

        $scope.saveCourse = function () {
            console.log($scope.course);

            var promise = $http.post("/api/home/updateCourse", $scope.course);
            promise.then(function (response) {
                $scope.course = response.data;
            });

        }


    }
})();