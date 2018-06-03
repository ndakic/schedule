(function() {
    'use strict';

    angular
        .module('HCIApp')
        .controller('NavbarController', NavbarController);

    NavbarController.$inject = ['$state'];

    function NavbarController ($state) {

        var vm = this;
        vm.settings = settings;
        vm.addClassroom = addClassroom;
        vm.addCourse = addCourse;
        vm.addDepartment = addDepartment;
        vm.addSoftware = addSoftware;

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

        function addSoftware() {
            $state.go('addSoftware');
        };

    };
})();
