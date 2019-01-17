'use strict';

//app.directive('niceScroll', [function () {
//    return {
//        restrict: 'A',
//        transclude: true,
//        template: '<div class="nice-scroll" ng-transclude></div>',
//        link: function (scope, element, attb) {
//            element.niceScroll({autohidemode: false,
//                                railalign: 'right',
//                                cursorwidth: '5px',
//                                cursorborder: 0,
//                                cursorborderradius: 0,
//                                cursorcolor: '#FEBC10',
//                                background: '#F9F9F9'
//            });
//            var api = element.data('jsp');
//            var w = $(window);
//            // it will re-initalize
//            element.bind('mouseover', function () {
//                $('.article-table-cont').height(w.height());
//                api.reinitialise();
//            });
//            scope.$watch(function () {
//                return {
//                    h: w.height()
//                }
//            }, function (newValue) {
//                $('.article-table-cont').height(newValue.h);
//                api.reinitialise();
//            }, true);

//            w.bind('resize', function () {
//                scope.$apply();
//            });
//        }
//    };
//}]);

angular.module('AssistanceApp.shared').directive('niceScroll', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attribute) {
            
            //console.log('s');
            //$('.article-table-cont').width($('#wrapper article').width());
            //console.log($('.article-table-cont').width($('#wrapper article').width()));
            $('.article-table-cont').niceScroll({
                autohidemode: false,
                railalign: 'right',
                cursorwidth: '5px',
                cursorborder: 0,
                cursorborderradius: 0,
                cursorcolor: '#FEBC10',
                background: '#F9F9F9'
            });

            //var nicescrolConf = {
            //    autohidemode: false,
            //    railalign: 'right',
            //    cursorwidth: '5px',
            //    cursorborder: 0,
            //    cursorborderradius: 0,
            //    cursorcolor: '#FEBC10',
            //    background: '#F9F9F9'
            //};

            //element.niceScroll(nicescrolConf);
            //scope.$apply();
        }
    };
});