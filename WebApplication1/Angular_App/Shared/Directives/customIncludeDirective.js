app.directive('customInclude', ['$http', '$compile', '$timeout', customInclude]);
function customInclude($http, $compile, $timeout) {
    return {
        restrict: 'A',
        link: function link($scope, elem, attrs) {
            //if url is not empty
            if (attrs.url) {
                $http({ method: 'GET', url: attrs.url, cache: true }).then(function (result) {
                    elem.append($compile(angular.element(result.data))($scope));
                    //after sometime we add width and height of modal
                    $timeout(function () {
                        //write your own code

                        (function checkAsideExisting() {
                            var niceScrollSettings = {
                                autohidemode: false,
                                railalign: 'right',
                                cursorwidth: '5px',
                                cursorborder: 0,
                                cursorborderradius: 0,
                                cursorcolor: '#73cdd8',
                                background: '#F9F9F9'
                            };
                            if ($('#wrapper aside').length === 1) {
                                $('#wrapper article, #wrapper aside').niceScroll(niceScrollSettings);
                            } else {
                                setTimeout(function () {
                                    checkAsideExisting();
                                }, 100);
                            }
                        })();
                    }, 1, false);
                });
            }
        }
    };
}