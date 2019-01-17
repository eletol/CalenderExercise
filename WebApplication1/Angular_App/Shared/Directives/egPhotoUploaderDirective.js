'use strict';

angular.module('AssistanceApp.shared').directive('egPhotoUploader', ['photoManager', function (photoManager) {


    var directive = {
        link: link,
        restrict: 'E',
        templateUrl: 'app/views/egPhotoUploader.html',
        scope: {
            id: '=',
            //uploadType: '=',
            photos:'='
        }
    };
    return directive;

    function link(scope, element, attrs) {
        scope.hasFiles = false;
        //scope.photos = [];
        scope.upload = photoManager.upload;
        //scope.appStatus = appInfo.status;
        scope.photoManagerStatus = photoManager.status;
    }
}]);