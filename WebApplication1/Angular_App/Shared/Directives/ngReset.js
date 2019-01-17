angular.module('AssistanceApp.shared').directive('ngReset', function myReset($timeout) {
    var preventDefault = (function () {
        if (angular.isObject(Event)) {
            return function (event) {
                return event.preventDefault();
            };
        }
        else {
            return function (event) {
                return (event.returnValue = false);
            };
        }
    })();

    return {
        restrict: 'A',
        require: 'form',
        scope: {
            refreshItem:'&'
        },
        link: {
            pre: function ngResetLink(scope, element, attrs, formCtrl) {
                var addControl = formCtrl.$addControl,
                removeControl = formCtrl.$removeControl,
                masters = [],
                timeouts = [];

                // Hack to capture ngModel registration to the form controller
                // without access to the form controller's internal controls array
                formCtrl.$addControl = function (ngModel) {
                    masters.push(ngModel);

                    // Need to wait for initial expressions to be evaluated during
                    // compile/link phase to store initial model value
                    timeouts.push($timeout(function () {
                        ngModel._origViewValue = ngModel.$viewValue;
                    }), false);

                    addControl.apply(this, arguments);
                };

                formCtrl.$removeControl = function (ngModel) {
                    var index = masters.indexOf(ngModel);

                    if (index >= 0) {
                        // Cleanup ngModel
                        delete ngModel._origViewValue;

                        masters.splice(index, 1);
                    }

                    removeControl.apply(this, arguments);
                };

                element.on('reset', function (event) {
                    angular.forEach(masters, function (ngModel) {
                        ngModel.$setViewValue(ngModel._origViewValue);
                        ngModel.$render();
                    });

                    $timeout(function () {
                        formCtrl.$setPristine();
                    }, 0);

                    scope.refreshItem();
                    preventDefault(event);
                });

                scope.$on('$destroy', function () {
                    // The timeouts should be resolved before a $destroy event occurs
                    // but just in case...
                    angular.forEach(timeouts, function (timeout) {
                        $timeout.cancel(timeout);
                    });

                    // Probably a bit overzealous...
                    // Cleanup formCtrl
                    formCtrl.$addControl = addControl;
                    formCtrl.$removeControl = removeControl;
                });
            }
        }
    };
});