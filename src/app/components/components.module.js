(function(angular) {
  'use strict';

  /**
   *
   * @ngdoc module
   * @name components
   *
   * @requires components.contact
   * @requires components.auth
   *
   * @description
   *
   * This is the components module. It includes all of our components.
   *
   **/

  angular.module('components', ['components.contact', 'components.auth']);
})(angular);
