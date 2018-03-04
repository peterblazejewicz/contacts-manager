(function(angular) {
  'use strict';

  var contacts = {
    bindings: {
      contacts: '<',
      filter: '<',
    },
    templateUrl: 'app/components/contact/contacts/contacts.html',
    controller: 'ContactsController',
  };

  angular
    .module('components.contact')
    .component('contacts', contacts)
    .config([
      '$stateProvider',
      function($stateProvider) {
        $stateProvider.state('contacts', {
          parent: 'app',
          url: '/contacts?filter',
          component: 'contacts',
          params: {
            filter: {
              value: 'none',
            },
          },
          resolve: {
            contacts: [
              'ContactService',
              function(ContactService) {
                return ContactService.getContactList().$loaded();
              },
            ],
            filter: [
              '$transition$',
              function($transition$) {
                return $transition$.params();
              },
            ],
          },
        });
      },
    ]);
})(angular);
