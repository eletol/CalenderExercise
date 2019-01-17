'use strict';

angular.module('AssistanceApp.shared').directive('whenScrolled', function () {
    return {

        restrict: 'A',
        link: function (scope, elem, attrs) {

            // we get a list of elements of size 1 and need the first element
            var raw = elem[0];
            var lastScroll = 0;

            var diff = Math.abs(lastScroll - raw.scrollTop);

            // we load more elements when scrolled past a limit
            elem.bind("scroll", function () {
                if (raw.scrollTop + raw.offsetHeight >= raw.scrollHeight-20 ) {
                    scope.loading = false;
                   // lastScroll = raw.scrollTop;
                    // we can give any function which loads more elements into the list
                    scope.$apply(attrs.whenScrolled);
                }
            });
        }
    }
});