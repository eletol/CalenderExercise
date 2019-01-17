
//'use strict';

//app
//    .directive('egFiles', function () {

//        var directive = {
//            link: link,
//            restrict: 'A',
//            scope: {
//                files: '=egFiles',
//                hasFiles: '=',
//                uploadType: '=',
//                getFile: '&'
//            }
//        };
//        return directive;

//        function link(scope, element, attrs) {
//            element.bind('change', function () {
//                scope.$apply(function () {
//                    if (element[0].files) {
//                        //scope.files.length = 0;
//                        //console.log(element);
//                        angular.forEach(element[0].files, function (f) {
//                            //console.log(f);
//                            if (f)
//                                f.append('imageSrc', '');
//                            scope.files.push(f);
//                            //console.log(f);
//                            //$scope.getFile();
//                        });
//                        //console.log(scope.files);
//                        scope.hasFiles = true;
//                    }
//                });
//            });

//            //element.onchange = function () {
//            //    scope.photos.push({
//            //        name: input.value.split(/(\\|\/)/g).pop(),
//            //        file: input.files[0]
//            //    });
//            //    console.log(scope.photos);
//            //    $scope.$apply()
//            //};

//            if (element[0].form) {
//                angular.element(element[0].form)
//                    .bind('reset', function () {
//                        scope.$apply(function () {
//                            scope.files.length = 0;
//                            scope.hasFiles = false;
//                        });
//                    });
//            }
//        }
//    });