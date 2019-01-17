'use strict';

angular.module('AssistanceApp.shared').directive('serverValidate', ['$http', function ($compile, $parse) {
    return {
        require: 'ngModel',
        link: function (scope, elm, attrs, ctrl) {
            //console.log('wiring up ' + attrs.ngModel + ' to controller ' + c.$name);
            //console.log(scope);
            scope.$watch('modelState', function () {
                if (scope.modelState == null) return;
                var modelStateKey = attrs.serverValidate || attrs.ngModel;
                modelStateKey = modelStateKey.replace('$index', scope.$index);
                //console.log('validation for ' + modelStateKey);
                //console.log(scope.modelState);
                //modelStateKey = String(modelStateKey).replace(".", ".");

                //console.log(scope.modelState.GroupName);
                if (scope.modelState[modelStateKey]) {
                    ctrl.$setValidity('server', false);
                    ctrl.$error.server = scope.modelState[modelStateKey];

                    //console.log($('#wrapper article').getNiceScroll());
                    $('#wrapper article').getNiceScroll().doScrollPos(0, elm.position().top);
                    ctrl.hasFocus = true;
                    elm.focus();
                    if (!ctrl) {
                        return;
                    }
                    //console.log(c.$error.server);
                } else {
                    ctrl.$setValidity('server', true);
                }
                //console.log(scope);

                elm.on('focus', function () {
                    elm.addClass('has-focus');
                    $timeout(function () {
                        ctrl.hasFocus = true;
                    }, 0);                   
                });

                elm.on('blur', function () {
                    ctrl.$setValidity('server', true);
                    elm.removeClass('has-focus');
                    elm.addClass('has-visited');
                    $timeout(function () {
                        ctrl.hasFocus = false;
                        ctrl.hasVisited = true;
                    }, 0);                   
                });

                elm.closest('form').on('submit', function () {
                    elm.addClass('has-visited');
                    $timeout(function () {
                        ctrl.hasFocus = false;
                        ctrl.hasVisited = true;
                    }, 0);                   
                });
            });
        }
    };
}])