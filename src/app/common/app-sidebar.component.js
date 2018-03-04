(function(angular) {
  'use strict';

  var appSidebar = {
    templateUrl: './app-sidebar.html',
    controller: 'AppSidebarController',
  };

  angular.module('common').component('appSidebar', appSidebar);
})(angular);
