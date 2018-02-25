"use strict";
/**
 * @ngdoc module
 * @name common
 * @requires ui.router
 * @requires angular-loading-bar
 * @description common module
 */
(function (angular) {
    angular
        .module('common', ['ui.router', 'angular-loading-bar'])
        .run([
        '$transitions',
        'cfpLoadingBar',
        function ($transitions, cfpLoadingBar) {
            $transitions.onStart({}, cfpLoadingBar.start);
            $transitions.onSuccess({}, cfpLoadingBar.complete);
        }
    ]);
})(angular);
(function (angular) {
    var app = {
        templateUrl: './app/common/app.template.html',
        controller: 'AppController'
    };
    /**
     * @ngdoc directive
     * @name app
     * @module common
     *
     * @description
     *
     * Aenean ornare odio elit, eget facilisis ipsum molestie ac. Nam bibendum a nibh ut ullamcorper.
     * Donec non felis gravida, rutrum ante mattis, sagittis urna. Sed quam quam, facilisis vel cursus at.
     *
     * @usage
     *
     * ### How to use
     * Aenean ornare odio elit, eget facilisis ipsum molestie ac. Nam bibendum a nibh ut ullamcorper.
     * Donec non felis gravida, rutrum ante mattis, sagittis urna. Sed quam quam, facilisis vel cursus at.
     **/
    angular
        .module('common')
        .component('app', app)
        .config([
        '$stateProvider',
        function ($stateProvider) {
            $stateProvider.state('app', {
                redirectTo: 'contacts',
                url: '/app',
                data: {
                    requiredAuth: true
                },
                component: 'app'
            });
        }
    ]);
})(angular);
(function (angular) {
    // @ts-ignore
    function AppController(AuthService, $state) {
        var ctrl = this;
        ctrl.user = AuthService.getUser();
        /**
         * @ngdoc method
         * @name AppController#logout
         *
         * @description Logout :)
         */
        ctrl.logout = function () {
            AuthService.logout().then(function () {
                $state.go('auth.login');
            });
        };
    }
    AppController.$inject = ['AuthService', '$state'];
    /**
     * @ngdoc type
     * @module common
     * @name AppController
     *
     * @description
     *
     * ## Lorem Ipsum 1
     * Aenean ornare odio elit, eget facilisis ipsum molestie ac. Nam bibendum a nibh ut ullamcorper.
     * Donec non felis gravida, rutrum ante mattis, sagittis urna. Sed quam quam, facilisis vel cursus at.
     *
     * ## Lorem Ipsum 2
     * Aenean ornare odio elit, eget facilisis ipsum molestie ac. Nam bibendum a nibh ut ullamcorper.
     * Donec non felis gravida, rutrum ante mattis, sagittis urna. Sed quam quam, facilisis vel cursus at.
     */
    angular.module('common').controller('AppController', AppController);
})(angular);
(function (angular) {
    angular.module('root', ['common']);
})(angular);
(function (angular) {
    var Root = /** @class */ (function () {
        function Root() {
            this.templateUrl = './app/root.template.html';
        }
        return Root;
    }());
    angular.module('root').component('root', new Root());
})(angular);
(function (angular) {
    angular.module('contacts.manager', ['root']);
})(angular);
//# sourceMappingURL=app.ui.js.map