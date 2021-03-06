(function(angular) {
  'use strict';

  var contactNew = {
    templateUrl: 'app/components/contact/contact-new/contact-new.html',
    controller: 'ContactNewController',
  };

  angular
    .module('components.contact')
    .component('contactNew', contactNew)
    .config([
      '$stateProvider',
      function($stateProvider) {
        $stateProvider.state('new', {
          parent: 'app',
          url: '/new',
          component: 'contactNew',
        });
      },
    ]);
})(angular);
