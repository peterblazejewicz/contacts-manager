(function(angular) {
  'use strict';

  var login = {
    templateUrl: './login.html',
    controller: 'LoginController',
  };

  angular
    .module('components.auth')
    .component('login', login)
    .config([
      '$stateProvider',
      '$urlRouterProvider',
      function($stateProvider, $urlRouterProvider) {
        $stateProvider
          .state('auth', {
            redirectTo: 'auth.login',
            url: '/auth',
            template: '<div ui-view></div>',
          })
          .state('auth.login', {
            url: '/login',
            component: 'login',
          });
        $urlRouterProvider.otherwise('/auth/login');
      },
    ]);
})(angular);
