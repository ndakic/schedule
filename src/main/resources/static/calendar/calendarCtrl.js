/**
 * Created by daka on 5/19/18.
 */


(function (angular) {
    angular.module('HCIApp')
        .controller('calendarCtrl', function($scope, $http){
            var vm = this;

            $scope.day = moment();
        });
}(angular));