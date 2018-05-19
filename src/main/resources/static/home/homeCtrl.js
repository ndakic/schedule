/**
 * Created by daka on 3/30/18.
 */

(function (angular) {
    angular.module('HCIApp')
        .controller('homeCtrl', function($scope, $http){
            var vm = this;

            $scope.datum = "18.05.2018.";


            var loadClassrooms = function () {
                var promise = $http.get("/api/home/classroomList");
                promise.then(function (response) {
                    $scope.classroomList = response.data;
                });
            };

            loadClassrooms();


            var loadCourses = function () {
                var promise = $http.get("/api/home/courseList");
                promise.then(function (response) {
                    $scope.courseList = response.data;
                });
            };

            loadCourses();





            $scope.selected = {};
            $scope.show = 5;

            $scope.lists = [
                {
                    time: "7:00",
                    max: 5,
                    classrooms: [
                        {
                            classroom: "A1",
                            allowedTypes: ['linux', 'cross'],
                            max: 1,
                            course: [

                            ]
                        },
                        {
                            classroom: "A2",
                            allowedTypes: ['linux', 'cross'],
                            max: 1,
                            course: [

                            ]
                        },
                        {
                            classroom: "A3",
                            allowedTypes: ['linux', 'cross'],
                            max: 1,
                            course: [

                            ]
                        },
                        {
                            classroom: "A4",
                            allowedTypes: ['windows', 'cross'],
                            max: 1,
                            course: [

                            ]
                        },
                        {
                            classroom: "A5",
                            allowedTypes: ['windows', 'cross'],
                            max: 1,
                            course: [
                            ]
                        }
                    ]
                },
                {
                    time: "8:00",
                    max: 5,
                    classrooms: [
                        {
                            classroom: "A1",
                            allowedTypes: ['linux', 'cross'],
                            max: 1,
                            course: [

                            ]
                        },
                        {
                            classroom: "A2",
                            allowedTypes: ['cross', 'linux', 'windows'],
                            max: 1,
                            course: [

                            ]
                        },
                        {
                            classroom: "A3",
                            allowedTypes: ['linux', 'cross'],
                            max: 1,
                            course: [

                            ]
                        },
                        {
                            classroom: "A4",
                            allowedTypes: ['cross', 'linux', 'windows'],
                            max: 1,
                            course: [

                            ]
                        },
                        {
                            classroom: "A5",
                            allowedTypes: ['linux', 'cross'],
                            max: 1,
                            course: [
                            ]
                        }
                    ]
                },

                {
                    time: "9:00",
                    max: 5,
                    classrooms: [
                        {
                            classroom: "A1",
                            allowedTypes: ['windows', 'cross'],
                            max: 1,
                            course: [
                            ]
                        },
                        {
                            classroom: "A2",
                            allowedTypes: ['windows', 'cross'],
                            max: 1,
                            course: [

                            ]
                        },
                        {
                            classroom: "A3",
                            allowedTypes: ['windows', 'cross'],
                            max: 1,
                            course: [
                            ]
                        },
                        {
                            classroom: "A4",
                            allowedTypes: ['linux', 'cross'],
                            max: 1,
                            course: [

                            ]
                        },
                        {
                            classroom: "A5",
                            allowedTypes: ['linux', 'cross'],
                            max: 1,
                            course: [
                            ]
                        }
                    ]
                },
                {
                    time: "10:00",
                    max: 5,
                    classrooms: [
                        {
                            classroom: "A1",
                            allowedTypes: ['linux', 'cross'],
                            max: 1,
                            course: [
                            ]
                        },
                        {
                            classroom: "A2",
                            allowedTypes: ['linux', 'cross'],
                            max: 1,
                            course: [

                            ]
                        },
                        {
                            classroom: "A3",
                            allowedTypes: ['cross', 'linux', 'windows'],
                            max: 1,
                            course: [
                            ]
                        },
                        {
                            classroom: "A4",
                            allowedTypes: ['cross', 'linux', 'windows'],
                            max: 1,
                            course: [

                            ]
                        },
                        {
                            classroom: "A5",
                            allowedTypes: ['windows', 'cross'],
                            max: 1,
                            course: [
                            ]
                        }
                    ]
                },
                {
                    time: "11:00",
                    max: 5,
                    classrooms: [
                        {
                            classroom: "A1",
                            allowedTypes: ['windows', 'cross'],
                            max: 1,
                            course: [
                            ]
                        },
                        {
                            classroom: "A2",
                            allowedTypes: ['windows', 'cross'],
                            max: 1,
                            course: [

                            ]
                        },
                        {
                            classroom: "A3",
                            allowedTypes: ['windows', 'cross'],
                            max: 1,
                            course: [
                            ]
                        },
                        {
                            classroom: "A4",
                            allowedTypes: ['linux', 'cross'],
                            max: 1,
                            course: [

                            ]
                        },
                        {
                            classroom: "A5",
                            allowedTypes: ['linux', 'cross'],
                            max: 1,
                            course: [
                            ]
                        }
                    ]
                }
            ];


            var loadSchedule = function () {
                console.log("Load");
                var promise = $http.get("/api/home/schedule/" + $scope.datum);
                promise.then(function (response) {
                    if(response.data != null){
                        console.log("Uslo");
                        $scope.lists = [];
                        for(var time in response.data["timePeriodList"]){
                            $scope.lists.push(response.data["timePeriodList"][time]);
                            console.log("ubaceno", response.data["timePeriodList"][time]);
                        };
                    };
                });
            };

            loadSchedule();


            $scope.items = []

            $scope.count = 0;
            // Model to JSON for demo purpose
            $scope.$watch('lists', function(lists) {
                $scope.modelAsJson = angular.toJson(lists, true);

                schedule();

            }, true);

            function schedule() {
                console.log("Save");

                $scope.data = {
                    "realdate": $scope.datum,
                    "timePeriodList": $scope.lists
                };

                var promise = $http.post("/api/home/schedule", $scope.data);
                promise.then(function (response) {
                    console.log("Sacuvano!");

                });

            };

        });
}(angular));