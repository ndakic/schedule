/**
 * Created by daka on 3/30/18.
 */

(function (angular) {
    angular.module('HCIApp')
        .controller('homeCtrl', function($scope, $http){
            var vm = this;


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

            $scope.models = {
                selected: null,
                templates: [
                    {type: "item", id: 2},
                    {type: "container", id: 1, columns: [[], []]}
                ],
                dropzones: {
                    "A": [
                        {
                            "type": "container",
                            "id": 1,
                            "columns": [
                                [
                                    {
                                        "type": "item",
                                        "id": "1"
                                    },
                                    {
                                        "type": "item",
                                        "id": "2"
                                    }
                                ],
                                [
                                    {
                                        "type": "item",
                                        "id": "3"
                                    }
                                ]
                            ]
                        },
                        {
                            "type": "item",
                            "id": "4"
                        },
                        {
                            "type": "item",
                            "id": "5"
                        },
                        {
                            "type": "item",
                            "id": "6"
                        }
                    ],
                    "B": [
                        {
                            "type": "item",
                            "id": 7
                        },
                        {
                            "type": "item",
                            "id": "8"
                        },
                        {
                            "type": "container",
                            "id": "2",
                            "columns": [
                                [
                                    {
                                        "type": "item",
                                        "id": "9"
                                    },
                                    {
                                        "type": "item",
                                        "id": "10"
                                    },
                                    {
                                        "type": "item",
                                        "id": "11"
                                    }
                                ],
                                [
                                    {
                                        "type": "item",
                                        "id": "12"
                                    },
                                    {
                                        "type": "container",
                                        "id": "3",
                                        "columns": [
                                            [
                                                {
                                                    "type": "item",
                                                    "id": "13"
                                                }
                                            ],
                                            [
                                                {
                                                    "type": "item",
                                                    "id": "14"
                                                }
                                            ]
                                        ]
                                    },
                                    {
                                        "type": "item",
                                        "id": "15"
                                    },
                                    {
                                        "type": "item",
                                        "id": "16"
                                    }
                                ]
                            ]
                        },
                        {
                            "type": "item",
                            "id": 16
                        }
                    ]
                }
            };

            $scope.$watch('models.dropzones', function(model) {
                $scope.modelAsJson = angular.toJson(model, true);
            }, true);

        });
}(angular));