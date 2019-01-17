
angular.module('AssistanceApp.shared').controller('YesNoController', ['$scope', 'close', 'txtMessage', function ($scope, close, txtMessage) {
    $scope.txtMessage = txtMessage;

  $scope.close = function(result) {
 	  close(result, 500); // close, but give 500ms for bootstrap to animate
  };
}]);