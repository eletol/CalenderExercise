'use strict';
angular.module('AssistanceApp.shared').directive('visibleToRoles', [
        'authService',
        function (authService) {
            return {
                link: function (scope, element, attrs) {
                    //console.log(attrs.visibleToRoles);

                    var makeVisible = function () {
                        element.removeClass('hidden');
                    },
                        makeHidden = function () {
                            element.addClass('hidden');
                        },
                        determineVisibility = function (resetFirst) {
                            if (resetFirst) {
                                makeVisible();
                            }

                            if (authService.hasSecurityRoles(roles)) {
                                makeVisible();
                            } else {
                                makeHidden();
                            }
                        },
                        roles = attrs.visibleToRoles.split(',');


                    if (roles.length > 0) {
                        determineVisibility(true);
                    }
                }
            };
        }
]);