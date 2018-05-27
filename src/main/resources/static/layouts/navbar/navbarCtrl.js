(function() {
    'use strict';

    angular
        .module('HCIApp')
        .controller('NavbarController', NavbarController);

    NavbarController.$inject = ['$state', '$scope'];

    function NavbarController ($state, $scope) {

        var vm = this;
        vm.settings = settings;
        vm.addClassroom = addClassroom;
        vm.addCourse = addCourse;
        vm.addDepartment = addDepartment;

        function settings() {
            $state.go('settings');
        };

        function addClassroom() {
            $state.go('addClassroom');
        };

        function addCourse() {
            $state.go('addCourse');
        };

        function addDepartment() {
            $state.go('addDepartment');
        };

    };
})();
