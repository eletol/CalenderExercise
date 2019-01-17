
"use strict";
angular.module("AssistanceApp.home").controller("homeController", function homeFunction($scope, $rootScope, $location, homeService) {
  
    $scope.serviceId = "";
    $scope.keyword = "";
    $scope.showDetails = false;
    $rootScope.selectedTab = 'home';

    $scope.getAppointments = function (month) {
        $scope.showDetails = false;
        $scope.selectedMonth = month;

        homeService.getAppointments(month).then(function (res) {
            $scope.showList = true;
            $scope.appointments = res.data.value;
        }, function (err) {

        });
    }
    $scope.showDetailsFun = function (appointment) {
        $scope.showDetails = true;
        $scope.appointmentDetails = appointment;
    }
    
});