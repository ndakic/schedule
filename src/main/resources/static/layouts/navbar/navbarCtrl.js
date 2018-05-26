(function() {
    'use strict';

    angular
        .module('HCIApp')
        .controller('NavbarController', NavbarController);

    NavbarController.$inject = ['$state', '$scope'];

    function NavbarController ($state, $scope) {

        var vm = this;
        vm.settings = settings;

        function settings() {
            $state.go('settings');
        }

    };
})();
