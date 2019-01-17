angular.module('AssistanceApp.shared').directive("ngFileSelect", function () {
    var directive = {
        link: link,
        restrict: 'A',
        scope: {
            files: '=egFiles',
            hasFiles: '=',
            uploadType: '=',
            getFile: '&'
        }
    };
    return directive;

    function link(scope, element) {
        element.bind("change", function (e) {
            //console.log((e.srcElement || e.target).files[0]);
            //$scope.file = (e.srcElement || e.target).files[0];
            //$scope.getFile();
            $timeout(function () {
                if (element[0].files) {
                    //scope.files.length = 0;
                    //console.log(element);
                    angular.forEach(element[0].files, function (f) {
                        //console.log(f);
                        scope.getFile({ files: f });
                        //scope.files.push(f);
                        //$scope.file = (e.srcElement || e.target).files[0];
                        scope.files.push(f);
                        //console.log(f);
                        //$scope.getFile();
                    });
                    //console.log(scope.files);
                    scope.hasFiles = true;
                }
            }, 0);            
        });
        if (element[0].form) {
            angular.element(element[0].form)
                .bind('reset', function () {
                    $timeout(function () {
                        scope.files.length = 0;
                        scope.hasFiles = false;
                    }, 0);                  
                });
        }
    }

})