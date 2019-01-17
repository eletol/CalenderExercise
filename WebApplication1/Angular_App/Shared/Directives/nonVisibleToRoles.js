'use strict';
angular.module('AssistanceApp.shared').directive('nonVisibleToRoles', [
        'authService',
        function (authService) {
            return {
                link: function (scope, element, attrs) {
                    //console.log(attrs.nonVisibleToRoles);

                    var makeVisible = function () {
                        element.removeClass('hidden');
                    },
                        makeHidden = function () {
                            element.addClass('hidden');
                        },
                        determineVisibility = function (resetFirst) {
                            if (resetFirst) {
                                makeHidden();
                            }

                            if (authService.hasSecurityRoles(roles)) {
                                makeHidden();                        
                            } else {
                                makeVisible();
                            }
                        },
                        roles = attrs.nonVisibleToRoles.split(',');


                    if (roles.length > 0) {
                        determineVisibility(true);
                    }
                }
            };
        }
]);