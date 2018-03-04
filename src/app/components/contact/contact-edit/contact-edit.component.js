(function(angular) {
  'use strict';

  var contactEdit = {
    bindings: {
      contact: '<',
    },
    templateUrl: 'app/components/contact/contact-edit/contact-edit.html',
    controller: 'ContactEditController',
  };

  angular
    .module('components.contact')
    .component('contactEdit', contactEdit)
    .config([
      '$stateProvider',
      function($stateProvider) {
        $stateProvider.state('contact', {
          parent: 'app',
          url: '/contact/:id',
          component: 'contactEdit',
          resolve: {
            contact: [
              '$transition$',
              'ContactService',
              function($transition$, ContactService) {
                var key = $transition$.params().id;
                return ContactService.getContactById(key).$loaded();
              },
            ],
          },
        });
      },
    ]);
})(angular);
