(function(angular) {
  'use strict';

  var appNav = {
    bindings: {
      user: '<',
      onLogout: '&',
    },
    templateUrl: 'app/common/app-nav.html',
  };

  angular.module('common').component('appNav', appNav);
})(angular);
