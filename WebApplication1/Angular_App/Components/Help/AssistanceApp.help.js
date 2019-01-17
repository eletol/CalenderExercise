'use strict';

angular.module('AssistanceApp.help', [
         'ui.router', 'AssistanceApp.authInterceptor',
        'LocalStorageModule'
    ]).config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('helpPage', {
            url: '/helpPage',
            templateUrl: '/Angular_App/Components/Help/help.html',
            controller: 'helpController'
        });

});


