(function() {
    'use strict';

    angular
        .module('econt-reporting')
        .component('econtReportingComponent', appComponent());

    appComponent.$inject = [];
    function appComponent() {
        return {
            templateUrl: 'app/views/app.component.html',
            controller: 'EcontReportingController',
            controllerAs: 'econtReporting'
        };
    }
})();