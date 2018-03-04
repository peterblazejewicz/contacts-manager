(function(angular) {
  'use strict';

  var contactDetail = {
    bindings: {
      contact: '<',
      onSave: '&',
      onUpdate: '&',
      onDelete: '&',
    },
    templateUrl: 'app/components/contact/contact-detail/contact-detail.html',
    controller: 'ContactDetailController',
  };

  angular
    .module('components.contact')
    .component('contactDetail', contactDetail);
})(angular);
