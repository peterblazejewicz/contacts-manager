(function(angular) {
  'use strict';

  angular.module('root', ['ui.router', 'common', 'components']).config([
    '$locationProvider',
    function($locationProvider) {
      $locationProvider.html5Mode(true);
    },
  ]);
})(angular);
