'use strict';


function notEqualZero(number) {
    return number === 0 ? 0 : 1;
}
angular.module('AssistanceApp.shared').directive('onFinishRenderFilters', function ($timeout) {
    return {
        restrict: 'A',
        link: function (scope, element, attr) {
            //console.log(scope);
            if (scope.$last === true) {
                $timeout(function() {
                    scope.$emit('ngRepeatFinished');
                });
            }
        }
    };
});