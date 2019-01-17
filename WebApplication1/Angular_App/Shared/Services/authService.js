'use strict';

angular.module('AssistanceApp.shared').factory('authService', ['$http', '$location', '$q', 'localStorageService', 'ngAuthSettings', function ($http, $location, $q, localStorageService, ngAuthSettings) {
    var baseUri = ngAuthSettings.baseUri;
    var authServiceFactory = {};
    var authentication = {
        isAuth: false,
        token: "",
        UserName: "",
        UserId: "",
        roles:[]
    };
    var getUserInfo = function (registerExternalData) {

        return $http({
            method: 'GET',
            url: baseUri + '/api/Account/UserInfo',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'Authorization': 'Bearer ' + registerExternalData.AccessToken }
        });


    };
    var logout = function () {

        clearAuthData();


    };
    var changePassord = function (changePassordData) {
        var url = baseUri + 'api/Account/ChangePassword';

        return $http({
            method: 'POST',
            url: url,
            data: changePassordData,
            headers: { 'Content-Type': 'application/json' }
        });
    };
    var login = function (loginData) {
        var data = "grant_type=password&UserName=" + loginData.UserName + "&password=" + loginData.Password;
        var deferred = $q.defer();
        $http.post(baseUri + 'token', data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {
         
            localStorageService.set('authorizationData', { token: response.access_token, UserName: response.UserName,Name:response.Name, UserID: response.UserId, roles: response.roles });

            authentication.isAuth = true;
            authentication.UserName = response.UserName;
            authentication.UserId = response.UserId;
            authentication.token = response.access_token;
            authentication.roles = response.roles;
            authentication.Name = response.Name;

            if (response.IsDirty === true) {
                $location.path('/changePassword');
                return;
            }
            deferred.resolve(response);
        }).error(function (err, status) {
            deferred.reject(err);
        });

        return deferred.promise;

    };
    var fillAuthData = function () {
        //debugger;
        var authData = localStorageService.get('authorizationData');


        if (authData) {
                authentication.isAuth = true;
                authentication.token = authData.token;
                authentication.UserName = authData.UserName;
                authentication.UserId = authData.UserID;
                authentication.roles = authData.roles;
                authentication.Name = authData.Name;


        } else {
           // $location.path('/login');
        }


    };
    var clearAuthData = function () {
        //debugger;
        var authData = localStorageService.get('authorizationData');

        if (authData) {
            authentication.isAuth = false;
            authentication.token = '';
            authentication.UserName = '';
            authentication.UserId = '';
            authentication.roles = [];
            authentication.Name = '';

        }

        localStorageService.remove('authorizationData');
        fillAuthData();
        $location.path('/login');


    };


    authServiceFactory.Login = login;
    authServiceFactory.GetUserInfo = getUserInfo;
    authServiceFactory.FillAuthData = fillAuthData;
    authServiceFactory.authentication = authentication;
    authServiceFactory.Logout = logout;
    authServiceFactory.ChangePassord = changePassord;

    return authServiceFactory;
}]);
