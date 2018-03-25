(function() {
    'use strict';

    angular
        .module('navbar')
        .component('navbarComponent', navbarComponent());

    navbarComponent.$inject = [];
    function navbarComponent() {
        return {
            templateUrl: 'app/navbar/views/navbar.component.html',
            controller: 'NavbarController',
            controllerAs: 'navbar'
        };
    }
})();