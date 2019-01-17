
angular.module('AssistanceApp.home').factory('homeService', function homefactory($http, $location, $q, appSetting) {
    var homesFactory = {};
    var serviceBase = appSetting.AppSetting.serviceBase;


    homesFactory.getAppointments = function (month) {
        var url = serviceBase + 'Appointments?$expand=Attendees($expand=Employee),Organizer&$filter=month(Date) eq ' + month;

       return $http({
            method: 'GET',
            url: url,
            headers: { 'Content-Type': 'application/json' }
        });
    };

    return homesFactory;
});