(function(angular) {
  'use strict';

  var contactTag = {
    bindings: {
      tag: '<',
      onChange: '&',
    },
    templateUrl: 'app/components/contact/contact-tag/contact-tag.html',
    controller: 'ContactTagController',
  };

  angular.module('components.contact').component('contactTag', contactTag);
})(angular);
