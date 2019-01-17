'use strict';

angular.module('AssistanceApp.shared').factory('lookUpService', ['$http', '$location', '$q', 'localStorageService', 'ngAuthSettings', 'appSetting', function ($http, $location, $q, localStorageService, ngAuthSettings, appSetting) {
    var lookUpServiceFactory = {};
    var baseUri = ngAuthSettings.baseUri;

    var serviceBase = appSetting.AppSetting.serviceBase;
    lookUpServiceFactory.getChannels = function () {
        var url = serviceBase + 'api/Channel';

        return $http({
            method: 'GET',
            url: url,
            headers: { 'Content-Type': 'application/json' }
        });
    };

    return lookUpServiceFactory;
}]);
