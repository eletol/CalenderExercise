'use strict';

angular.module('AssistanceApp.shared').directive('dateTimePickerAddOn', function ($compile) {
    return {
        restrict: 'C',
        link: function (scope, element, attrs, ngModel) {
            element.datetimepicker({
                autoclose: true,
                "showButtonPanel":  false,
                todayHighlight: true
            });
        }
    };
});