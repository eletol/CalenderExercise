'use strict';

angular.module('AssistanceApp.shared').factory('appSetting', ['$http', '$location', '$q', 'localStorageService', 'ngAuthSettings', function ($http, $location, $q, localStorageService, ngAuthSettings) {
    var baseUri = ngAuthSettings.baseUri;
    var appSettingFactory = {};
    var appSetting = {
        serviceBase: 'http://localhost:15057/'
    };
    var getAppSetting = function () {

        $.ajax({
            type: "GET",
            url: baseUri + 'api/Settings/GetAppSetting',
            async: false,
            success: function (result) {
                    appSetting.serviceBase = result.serviceBase;
            }
        });
       //$http.get(baseUri + 'api/Settings/GetAppSetting').success(function (response) {
       //     appSetting.serviceBase = response.serviceBase;
       // }).error(function (err, status) {
       //     deferred.reject(err);
       // });;


    };
    var fillSettings = function () {
            //var appSettingData = localStorageService.get('appSetting');
      //if (appSettingData)
      //     appSetting.serviceBase = appSettingData.serviceBase;
      //  else 
      //      getAppSetting();
         // getAppSetting();
    }

    appSettingFactory.FillSettings = fillSettings;
    appSettingFactory.AppSetting = appSetting;
    return appSettingFactory;
}]);
