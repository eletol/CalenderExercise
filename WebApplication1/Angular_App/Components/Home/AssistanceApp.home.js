'use strict';

angular.module('AssistanceApp.home', [
         'ui.router', 'AssistanceApp.authInterceptor',
        'LocalStorageModule'
    ]).config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: '/Angular_App/Components/Home/home.html',
            controller: 'homeController'
        });


});

