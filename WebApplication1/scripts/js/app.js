(function () {

    angular.module('app', ['textAngular'])
        .controller('ctrl', ['$scope', function ($scope) {
            $scope.toolbar = [
                /*['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'],*/
                ['bold', 'italics', 'underline', 'ul', 'ol'],
                ['justifyLeft', 'justifyCenter', 'justifyRight']
            ];
            //$scope.htmlContent = '<h3>Initial Content</h3><ul><li>List item 1</li><li>List item 2</li></ul><ol><li>List item 1</li><li>List item 2</li></ol><p><b>Bold text</b></p><h3 style="text-align: right;"><b> </b>كلام عربى اهه</h3>';
        }]);

})();