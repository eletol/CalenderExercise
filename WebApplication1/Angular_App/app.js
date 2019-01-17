
"use strict";

var BaseUri = location.protocol + "//" + location.hostname + (location.port ? ":" + location.port : "") + "/";

// Declare app level module which depends on views, and components
angular.module("AssistanceApp", [
    "ui.router",
    "AssistanceApp.config",
    "AssistanceApp.httpInterceptor",
    "AssistanceApp.authInterceptor",
    "LocalStorageModule",
    "AssistanceApp.shared",
    "AssistanceApp.help",
    "AssistanceApp.home",
    "infinite-scroll"
]);


angular.module("AssistanceApp").config([
    "$locationProvider", "$urlRouterProvider", "$httpProvider", function ($locationProvider, $urlRouterProvider, $httpProvider) {
        $locationProvider.hashPrefix("!");
        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise("/home");
        $httpProvider.interceptors.push("httpInterceptor");
        $httpProvider.interceptors.push("authInterceptorService");
        $httpProvider.defaults.headers.common = {};
        $httpProvider.defaults.headers.post = {};
        $httpProvider.defaults.headers.put = {};
        $httpProvider.defaults.headers.patch = {};
      
    }
]).controller("AssistanceAppController", function assistanceApp($scope, $rootScope, $location, $window, authService,appSetting) {
    $scope.serviceBase = appSetting.AppSetting.serviceBase;
   
        $rootScope.selectedTab = 'home';
        $scope.goTo= function (go) {
            $window.location.href = go;
        };
 
 



    }
);

angular.module("AssistanceApp.config", []).constant("ngAuthSettings",
{
    baseUri: BaseUri
});


angular.module("AssistanceApp").run([
    "authService", "appSetting", "$rootScope", function (authService, appSetting,$rootScope) {
        appSetting.FillSettings();
        authService.FillAuthData();
    
    }
]);
angular.module("AssistanceApp.authInterceptor", [])
    .factory("authInterceptorService", [
        "$q", "$injector", "$location", "localStorageService", function($q, $injector, $location, localStorageService) {
            
            var authInterceptorServiceFactory = {};

            var request = function(config) {

                config.headers = config.headers || {};

                //var authData = localStorageService.get("authorizationData");
                //if (authData) {
                //    config.headers.Authorization = "Bearer " + authData.token;
                //} 

                return config;
            };
            var responseError = function(rejection) {
                //$location.path("/login");
                if (rejection.status === 401) {
                    //$location.path('/login');
                }
                return $q.reject(rejection);
            };
            authInterceptorServiceFactory.request = request;
            authInterceptorServiceFactory.responseError = responseError;

            return authInterceptorServiceFactory;
        }
    ])
    .config([
        "$httpProvider", function ($httpProvider) {
            $httpProvider.interceptors.push("authInterceptorService");

        }
    ]);

angular.module("AssistanceApp.httpInterceptor", []).factory("httpInterceptor", function($q, $rootScope, $log) {

        var numLoadings = 0;
        return {
            request: function(config) {

              
                numLoadings++;
               
                // Show loader
                return config || $q.when(config);

            },
            response: function(response) {

                if ((--numLoadings) === 0) {
                    $("#dvLoader").removeClass("shown");


                    // Hide loader
                }

                return response || $q.when(response);

            },
            responseError: function(response) {

                if (!(--numLoadings)) {
                    //$("#errorModalApp").modal('show');

                    // Hide loader
                    $("#dvLoader").removeClass("shown");

                }

                return $q.reject(response);
            }
        };
    })
    .config(function($httpProvider) {
        $httpProvider.interceptors.push("httpInterceptor");
    });