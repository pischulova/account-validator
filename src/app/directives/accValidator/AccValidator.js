const serverUrl = 'server/api/validate';

export function AccValidator() {
  return {
    restrict: 'E',
    transclude: true,
    scope: {},
    templateUrl: 'app/directives/accValidator/AccValidator.html',
    controller: AccValidatorCtrl
  };
}

function AccValidatorCtrl($scope, $http) {
  $scope.accNumber = null;

  $scope.validate = function () {
    $http.post(serverUrl, $scope.accNumber.number).then(resp => {
      $scope.accNumber.valid = resp.valid;

      var accountEl = angular.element(document.querySelector('.account'));

      if ($scope.accNumber.valid) {
        accountEl.addClass('green');
      } else {
       accountEl.addClass('red');
      }
    })
  };
}

