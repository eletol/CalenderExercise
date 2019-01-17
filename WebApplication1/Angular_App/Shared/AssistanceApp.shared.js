angular.module('AssistanceApp.shared', ['ngCookies', 'pascalprecht.translate', 'ngMessages', 'ui.bootstrap', 'ngDialog', 'toaster']);

     // Example of how to set default values for all dialogs
angular.module('AssistanceApp.shared').config(['ngDialogProvider', function (ngDialogProvider) {
            ngDialogProvider.setDefaults({
                className: 'ngdialog-theme-default',
                plain: false,
                showClose: true,
                closeByDocument: true,
                closeByEscape: true,
                appendTo: false,
                preCloseCallback: function () {
                    console.log('default pre-close callback');
                }
            });
        }]);