/**
 * Created by dakamadafaka on 7/7/17.
 */

(function (angular) {

    var app = angular.module('HCIApp',[
        'ui.router',
        'ngResource',
        'ngStorage',
        'ui.bootstrap',
        'Alertify',
        'authentication',
        'dndLists'
    ]);

    app.config(['$qProvider', function ($qProvider) {
        $qProvider.errorOnUnhandledRejections(false);
    }]);

    app
        .config(config)
        .run(run);
    function config($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('app', {
                abstract: true,
                views: {
                    'navbar@': {
                        templateUrl: 'layouts/navbar/navbar.html',
                        controller: 'NavbarController',
                        controllerAs: 'vm'
                    }

                }
            });
    }
    function run($rootScope, $http, $location, $localStorage, AuthenticationService, $state) {
        // postavljanje tokena nakon refresh
        if ($localStorage.currentUser) {
            $http.defaults.headers.common.Authorization = $localStorage.currentUser.token;
        }

        // ukoliko pokušamo da odemo na stranicu za koju nemamo prava, redirektujemo se na login
        $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
            // lista javnih stanja

            var publicStates = ['login','registration', '/', /*'entry',*/''];
            var restrictedState = publicStates.indexOf(toState.name) === -1;
            if(restrictedState && !AuthenticationService.getCurrentUser()){
                //$state.go('login');
            }
            // console.log(toState.name);
            //provera ako je ulogovan
            if($localStorage.currentUser && toState.name === "login"){
                //$state.go('articles');
            };

        });

        $rootScope.logout = function () {
            AuthenticationService.logout();
        }

        $rootScope.getCurrentUserRole = function () {
            if (!AuthenticationService.getCurrentUser()){
                return undefined;
            }
            else{
                return AuthenticationService.getCurrentUser().role;
            }
        };
        $rootScope.isLoggedIn = function () {
            if (AuthenticationService.getCurrentUser()){
                return true;
            }
            else{
                return false;
            }
        };
        $rootScope.getCurrentState = function () {
            return $state.current.name;
        };

        $rootScope.getCurrentUser = function () {
            if (!AuthenticationService.getCurrentUser()){
                return undefined;
            }
            else{
                return AuthenticationService.getCurrentUser().username;
            }
        };

    };

    app.directive("calendar", function() {
        return {
            restrict: "E",
            templateUrl: "calendar.html",
            scope: {
                selected: "="
            },
            link: function(scope) {
                scope.selected = _removeTime(scope.selected || moment());
                scope.month = scope.selected.clone();

                var start = scope.selected.clone();
                start.date(1);
                _removeTime(start.day(0));

                _buildMonth(scope, start, scope.month);

                scope.select = function(day) {
                    scope.selected = day.date;
                };

                scope.next = function() {
                    var next = scope.month.clone();
                    _removeTime(next.month(next.month() + 1).date(1));
                    scope.month.month(scope.month.month() + 1);
                    _buildMonth(scope, next, scope.month);
                };

                scope.previous = function() {
                    var previous = scope.month.clone();
                    _removeTime(previous.month(previous.month() - 1).date(1));
                    scope.month.month(scope.month.month() - 1);
                    _buildMonth(scope, previous, scope.month);
                };
            }
        };

        function _removeTime(date) {
            return date.day(0).hour(0).minute(0).second(0).millisecond(0);
        }

        function _buildMonth(scope, start, month) {
            scope.weeks = [];
            var done = false,
                date = start.clone(),
                monthIndex = date.month(),
                count = 0;
            while (!done) {
                scope.weeks.push({
                    days: _buildWeek(date.clone(), month)
                });
                date.add(1, "w");
                done = count++ > 2 && monthIndex !== date.month();
                monthIndex = date.month();
            }
        }

        function _buildWeek(date, month) {
            var days = [];
            for (var i = 0; i < 7; i++) {
                days.push({
                    name: date.format("dd").substring(0, 1),
                    number: date.date(),
                    isCurrentMonth: date.month() === month.month(),
                    isToday: date.isSame(new Date(), "day"),
                    date: date
                });
                date = date.clone();
                date.add(1, "d");
            }
            return days;
        }
    });

}(angular));