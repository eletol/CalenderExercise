'use strict';

angular.module('AssistanceApp.shared').directive('offersDirective', function () {
    return {
        restrict: 'A',
        scope: {
            items: '=offersDirective'
        },
        templateUrl: '/offers/list'
    };
});