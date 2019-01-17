'use strict';

angular.module('AssistanceApp.shared').directive('fileModel', ['$parse', function ($parse) {
    return {
        restrict: 'A',
        //scope: {
        //    fileModel: '=fileModel'
        //},
        link: function (scope, element, attrs) {
            console.log(attrs.fileModel);
            var model = $parse(attrs.fileModel);
            var modelSetter = model.assign;

            element.bind('change', function () {
                $timeout(function () {
                    modelSetter(scope, element[0].files[0]);
                }, 0);               
            });
        }
    };
}]);