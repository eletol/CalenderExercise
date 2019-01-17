'use strict';

angular.module('AssistanceApp.shared').directive('dateTimePicker', function ($compile) {
    return {
        restrict: 'C',
        scope: {
            minDate: '=',
            dateTimePickerFilter: '&'
        },
        link: function (scope, element, attrs, ngModel) {
            //console.log(attrs);
            if (scope.minDate == 0) {
                element.datepicker({
                    dateFormat: "yy-mm-dd",
                    showMeridian: true,
                    autoclose: true,
                    todayBtn: true,
                    minDate: 0,
                    todayHighlight: true
                });
            }
            else {
                if (!attrs.name) {
                    element.datepicker({
                        dateFormat: "yy-mm-dd",
                        showMeridian: true,
                        autoclose: true,
                        todayBtn: true,
                        todayHighlight: true
                    });
                }
                else {
                    $('.custom-datepicker').datepicker({
                        showButtonPanel: true,
                        beforeShow: function () {
                            //console.log('custom');
                        },
                        onClose: function (dateText, inst) {
                            setTimeout(function () {
                                $("#ui-datepicker-div").removeClass('hide-calendar MonthDatePicker YearDatePicker HideTodayButton');
                                //console.log('remove classes');
                            }, 200);
                            if (dateText != '')
                                scope.dateTimePickerFilter();
                        }
                    });
                    //if (attrs.name == 'year') {
                    //    $('.year-datepicker').datepicker({
                    //        changeYear: true,
                    //        showButtonPanel: true,
                    //        dateFormat: "yy",
                    //        beforeShow: function (e, t) {
                    //            $(this).datepicker("hide");
                    //            $("#ui-datepicker-div").addClass("hide-calendar");
                    //            $("#ui-datepicker-div").addClass('YearDatePicker');
                    //            $("#ui-datepicker-div").addClass('HideTodayButton');
                    //        },
                    //        onClose: function (dateText, inst) {
                    //            var year = $("#ui-datepicker-div .ui-datepicker-year :selected").val();
                    //            $(this).datepicker('setDate', new Date(year, 1));
                    //            setTimeout(function () {
                    //                $("#ui-datepicker-div").removeClass('hide-calendar MonthDatePicker YearDatePicker HideTodayButton');
                    //                //console.log('remove classes');
                    //            }, 200);
                    //            scope.dateTimePickerFilter();
                    //        }
                    //    });
                    //}
                    //if (attrs.name == 'month') {
                    //    $('.month-datepicker').datepicker({
                    //        changeMonth: true,
                    //        showButtonPanel: true,
                    //        dateFormat: "MM",
                    //        beforeShow: function (e, t) {
                    //            $(this).datepicker("hide");
                    //            $("#ui-datepicker-div").addClass("hide-calendar");
                    //            $("#ui-datepicker-div").addClass('MonthDatePicker');
                    //            $("#ui-datepicker-div").addClass('HideTodayButton');
                    //        },
                    //        onClose: function (dateText, inst) {
                    //            var n = Math.abs($("#ui-datepicker-div .ui-datepicker-month :selected").val() - 1) + 2;
                    //            $(this).datepicker("setDate", new Date(null, n, null));
                    //            setTimeout(function () {
                    //                $("#ui-datepicker-div").removeClass('hide-calendar MonthDatePicker YearDatePicker HideTodayButton');
                    //                //console.log('remove classes');
                    //            }, 200);
                    //            scope.dateTimePickerFilter();
                    //        }
                    //    });
                    //} else {
                    //}
                }
            }
        }
    };
});