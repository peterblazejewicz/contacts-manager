(function(angular) {
  'use strict';

  function ContactsController($filter, $state) {
    var ctrl = this;

    ctrl.$onInit = function() {
      ctrl.filteredContacts = $filter('contactsFilter')(
        ctrl.contacts,
        ctrl.filter,
      );
    };

    ctrl.goToContact = function(event) {
      $state.go('contact', {
        id: event.contactId,
      });
    };
  }

  ContactsController.$inject = ['$filter', '$state'];

  angular
    .module('components.contact')
    .controller('ContactsController', ContactsController);
})(angular);
