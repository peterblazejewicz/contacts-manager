(function(angular) {
  'use strict';

  function LoginController(AuthService, $state) {
    var ctrl = this;
    ctrl.$onInit = function() {
      ctrl.error = null;
      ctrl.user = {
        email: '',
        password: '',
      };
    };
    ctrl.loginUser = function(event) {
      return AuthService.login(event.user).then(
        function() {
          $state.go('app');
        },
        function(reason) {
          ctrl.error = reason.message;
        },
      );
    };
  }

  LoginController.$inject = ['AuthService', '$state'];

  angular
    .module('components.auth')
    .controller('LoginController', LoginController);
})(angular);
