/**
 * Created by daka on 5/24/18.
 */


(function (angular) {
    angular.module('HCIApp')
        .controller('weekCtrl', function($scope, $http, $state){
            var vm = this;

            var insertData = function () {
                var promise = $http.get("/api/home/insertData");
                promise.then(function (response) {
                    console.log("Insert Data!");
                    loadAllDays();
                });
            };

            insertData();

            var loadAllDays = function () {
                var promise = $http.get("/api/day/days");
                console.log("test1");
                promise.then(function (response) {
                    $scope.days = response.data;
                    console.log("days: ", $scope.days);
                    if(response.data.length == 0){
                        var order = 0;
                        var days = ['Monday', "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

                        for(var day in days){
                            saveDay(days[day], order);
                            order++;
                        }
                    }
                });
            };

            function saveDay(day, order) {
                console.log("Save started!");
                $scope.data = {
                    "id": day,
                    "dayorder": order,
                    "timePeriodList": $scope.lists
                };

                var promise = $http.post("/api/day/saveDay", $scope.data);
                promise.then(function (response) {
                    console.log("Week schedule created!");
                });
            };

            $scope.lists = [
                {
                    ordertime: 1,
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
                            allowedTypes: ['windows', 'cross'],
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
                            allowedTypes: ['cross', 'linux', 'windows'],
                            max: 1,
                            course: [
                            ]
                        }
                    ]
                },
                {   ordertime: 2,
                    time: "7:15",
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
                            allowedTypes: ['windows', 'cross'],
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
                            allowedTypes: ['cross', 'linux', 'windows'],
                            max: 1,
                            course: [
                            ]
                        }
                    ]
                },

                {   ordertime: 3,
                    time: "7:30",
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
                            allowedTypes: ['windows', 'cross'],
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
                            allowedTypes: ['cross', 'linux', 'windows'],
                            max: 1,
                            course: [
                            ]
                        }
                    ]
                },
                {
                    ordertime: 4,
                    time: "7:45",
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
                            allowedTypes: ['windows', 'cross'],
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
                            allowedTypes: ['cross', 'linux', 'windows'],
                            max: 1,
                            course: [
                            ]
                        }
                    ]
                },
                {   ordertime: 5,
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
                            allowedTypes: ['linux', 'cross'],
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
                            allowedTypes: ['windows', 'cross'],
                            max: 1,
                            course: [

                            ]
                        },
                        {
                            classroom: "A5",
                            allowedTypes: ['cross', 'linux', 'windows'],
                            max: 1,
                            course: [
                            ]
                        }
                    ]
                },
                {   ordertime: 6,
                    time: "8:15",
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
                            allowedTypes: ['windows', 'cross'],
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
                            allowedTypes: ['cross', 'linux', 'windows'],
                            max: 1,
                            course: [
                            ]
                        }
                    ]
                },
                {   ordertime: 7,
                    time: "8:30",
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
                            allowedTypes: ['windows', 'cross'],
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
                            allowedTypes: ['cross', 'linux', 'windows'],
                            max: 1,
                            course: [
                            ]
                        }
                    ]
                },
                {   ordertime: 8,
                    time: "8:45",
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
                            allowedTypes: ['windows', 'cross'],
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
                            allowedTypes: ['cross', 'linux', 'windows'],
                            max: 1,
                            course: [
                            ]
                        }
                    ]
                },
                {   ordertime: 9,
                    time: "9:00",
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
                            allowedTypes: ['windows', 'cross'],
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
                            allowedTypes: ['cross', 'linux', 'windows'],
                            max: 1,
                            course: [
                            ]
                        }
                    ]
                },
                {   ordertime: 10,
                    time: "9:15",
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
                            allowedTypes: ['windows', 'cross'],
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
                            allowedTypes: ['cross', 'linux', 'windows'],
                            max: 1,
                            course: [
                            ]
                        }
                    ]
                },
                {   ordertime: 11,
                    time: "9:30",
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
                            allowedTypes: ['windows', 'cross'],
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
                            allowedTypes: ['cross', 'linux', 'windows'],
                            max: 1,
                            course: [
                            ]
                        }
                    ]
                },
                {   ordertime: 12,
                    time: "9:45",
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
                            allowedTypes: ['windows', 'cross'],
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
                            allowedTypes: ['cross', 'linux', 'windows'],
                            max: 1,
                            course: [
                            ]
                        }
                    ]
                },
                {   ordertime: 13,
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
                            allowedTypes: ['windows', 'cross'],
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
                            allowedTypes: ['cross', 'linux', 'windows'],
                            max: 1,
                            course: [
                            ]
                        }
                    ]
                },
                {   ordertime: 14,
                    time: "10:15",
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
                            allowedTypes: ['windows', 'cross'],
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
                            allowedTypes: ['cross', 'linux', 'windows'],
                            max: 1,
                            course: [
                            ]
                        }
                    ]
                },
                {   ordertime: 15,
                    time: "10:30",
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
                            allowedTypes: ['windows', 'cross'],
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
                            allowedTypes: ['cross', 'linux', 'windows'],
                            max: 1,
                            course: [
                            ]
                        }
                    ]
                },
                {   ordertime: 16,
                    time: "10:45",
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
                            allowedTypes: ['windows', 'cross'],
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
                            allowedTypes: ['cross', 'linux', 'windows'],
                            max: 1,
                            course: [
                            ]
                        }
                    ]
                },
                {   ordertime: 17,
                    time: "11:00",
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
                            allowedTypes: ['windows', 'cross'],
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
                            allowedTypes: ['cross', 'linux', 'windows'],
                            max: 1,
                            course: [
                            ]
                        }
                    ]
                }
            ];


        });
}(angular));