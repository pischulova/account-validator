const serverUrl = 'server/api/validate';

export function AccValidator($q, $http) {
  return {
    require:'ngModel',
    link: function(scope, elem, attrs, ctrl) {
      ctrl.$asyncValidators.accValidator = function(modelValue, viewValue) {

        if (ctrl.$isEmpty(modelValue)) {
          return $q.when();
        }

        var def = $q.defer();

        $http.post(serverUrl, modelValue).success(resp => {
          scope.accNumber.valid = resp.valid;

          var accountEl = angular.element(document.querySelector('.account'));

          if (resp.valid) {
            accountEl.addClass('green');
            def.resolve();
          } else {
            accountEl.addClass('red');
            def.resolve();
          }
        }).error(error => {
            def.reject(error);
        })

        return def.promise;
      };
    }
  };
}
