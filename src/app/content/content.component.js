(function() {
    'use strict';

    angular
        .module('content')
        .component('contentComponent', contentComponent());

    contentComponent.$inject = [];
    function contentComponent() {
        return {
            templateUrl: 'app/content/views/content.component.html',
            controller: 'ContentController',
            controllerAs: 'content'
        };
    }
})();