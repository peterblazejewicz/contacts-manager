(function(angular) {
  'use strict';

  /**
   *
   * @ngdoc module
   * @name components.auth
   *
   * @requires ui.router
   * @requires firebase
   *
   * @description
   *
   * This is the auth module. It includes our auth components
   *
   **/
  angular
    .module('components.auth', ['ui.router', 'firebase'])
    .config([
      '$firebaseRefProvider',
      function($firebaseRefProvider) {
        var config = {
          apiKey: 'AIzaSyAfMsu1zzbEVoJG0Lcp8dN_JNwW1ZX5C4c',
          authDomain: 'contacts-manager-67b13.firebaseapp.com',
          databaseURL: 'https://contacts-manager-67b13.firebaseio.com',
          projectId: 'contacts-manager-67b13',
          storageBucket: 'contacts-manager-67b13.appspot.com',
          messagingSenderId: '540166882600',
        };

        $firebaseRefProvider.registerUrl({
          default: config.databaseURL,
          contacts: config.databaseURL + '/contacts',
        });

        firebase.initializeApp(config);
      },
    ])
    .run([
      '$transitions',
      '$state',
      'AuthService',
      function($transitions, $state, AuthService) {
        $transitions.onStart(
          {
            to: function(state) {
              return !!(state.data && state.data.requiredAuth);
            },
          },
          function() {
            return AuthService.requireAuthentication().catch(function() {
              return $state.target('auth.login');
            });
          },
        );
        $transitions.onStart(
          {
            to: 'auth.*',
          },
          function() {
            if (AuthService.isAuthenticated()) {
              return $state.target('app');
            }
          },
        );
      },
    ]);
})(angular);
