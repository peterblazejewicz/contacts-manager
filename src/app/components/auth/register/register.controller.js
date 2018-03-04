(function(angular) {
  'use strict';

  function RegisterController(AuthService, $state) {
    var ctrl = this;
    ctrl.$onInit = function() {
      ctrl.error = null;
      ctrl.user = {
        email: '',
        password: '',
      };
    };
    ctrl.createUser = function(event) {
      return AuthService.register(event.user).then(
        function() {
          $state.go('app');
        },
        function(reason) {
          ctrl.error = reason.message;
        },
      );
    };
  }

  RegisterController.$inject = ['AuthService', '$state'];

  angular
    .module('components.auth')
    .controller('RegisterController', RegisterController);
})(angular);
