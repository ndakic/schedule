/**
 * Created by daka on 3/30/18.
 */

(function (angular) {
    angular.module('HCIApp')
        .controller('homeCtrl', function($scope, $http){
            var vm = this;

            $scope.datum = "18.05.2018.";
            $scope.selected = {};
            $scope.show = 5;
            $scope.loaded = false;

            var loadSchedule = function () {
                console.log("Load");
                var promise = $http.get("/api/home/schedule/" + $scope.datum);
                promise.then(function (response) {
                    if(response.data){
                        $scope.lists = [];
                        $scope.loaded = true;
                        for(var time in response.data["timePeriodList"]){
                            $scope.lists.push(response.data["timePeriodList"][time]);
                        };
                    }else{
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
                            {   ordertime: 2,
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

                            {   ordertime: 3,
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
                                ordertime: 4,
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
                            {   ordertime: 5,
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
                    };

                    loadCourses();
                });
            };

            loadSchedule();

            $scope.items = [];
            $scope.count = 0;

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
                if($scope.loaded){
                    console.log();
                    var promise = $http.post("/api/home/schedule", $scope.data);
                    promise.then(function (response) {
                        console.log("Sacuvano!");
                    });
                }else{
                    $scope.loaded = true;

                }


            };

            $scope.courseList = [];

            var loadCourses = function () {
                var promise = $http.get("/api/home/courseList");
                promise.then(function (response) {

                    $scope.courseList = [];

                    for(var course in response.data){
                        var exist = checkCourse($scope.lists, response.data[course]["id"]);
                        if(exist == false){
                            $scope.courseList.push(response.data[course]);
                        };
                    };
                });
            };



             function checkCourse(lists, course_id) {
                var status = false;
                for(var time in lists){
                    for(var classroom in lists[time]["classrooms"]){
                        for(var course in lists[time]["classrooms"][classroom]["course"]){
                            if((lists[time]["classrooms"][classroom]["course"][course]["id"]).trim() === course_id.trim()){
                                status = true;
                            };
                        };
                    };
                };

                return status;
            };



        });
}(angular));