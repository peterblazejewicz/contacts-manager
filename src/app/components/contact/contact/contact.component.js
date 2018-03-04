(function(angular) {
  'use strict';

  var contact = {
    bindings: {
      contact: '<',
      onSelect: '&',
    },
    templateUrl: 'app/components/contact/contact/contact.html',
    controller: 'ContactController',
  };

  angular.module('components.contact').component('contact', contact);
})(angular);
