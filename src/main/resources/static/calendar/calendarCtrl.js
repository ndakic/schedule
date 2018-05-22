/**
 * Created by daka on 5/19/18.
 */


(function (angular) {
    angular.module('HCIApp')
        .controller('calendarCtrl', function($scope, $http, $state){
            var vm = this;

            $scope.day = moment.utc();
            console.log("today: ", $scope.day);

            var loadAllSchedules = function () {
                var promise = $http.get("/api/home/schedules");
                promise.then(function (response) {
                    $scope.schedules = response.data;
                    console.log("All Schedules loaded", response.data);
                });
            };

            loadAllSchedules();

            var loadCourses = function () {
                $scope.courseList = [];
                var promise = $http.get("/api/home/courseList");
                promise.then(function (response) {

                    for(var course in response.data){
                        var exist = checkCourse(response.data[course]["id"]);
                        if(exist == false){
                            $scope.courseList.push(response.data[course]);
                        };
                    };
                });
            };

            loadCourses();

            var status = false;

            $scope.$watch('day', function(day) {

                console.log("watch");

                if(status){
                    window.location.assign("/#!/calendar/"+ day.format('DD.MM.YYYY.'));
                }


                status = true;

            }, true);

        });
}(angular));