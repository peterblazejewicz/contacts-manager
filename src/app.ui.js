"use strict";
(function (angular) {
    /**
     *
     * @ngdoc module
     * @name components.auth
     *
     * @requires ui.router
     * @requires firebase
     *
     * @description
     *
     * This is the auth module. It includes our auth components
     *
     **/
    angular
        .module('components.auth', ['ui.router', 'firebase'])
        .config([
        '$firebaseRefProvider',
        function ($firebaseRefProvider) {
            var config = {
                apiKey: 'AIzaSyCsNISt3dFx7dy5AImIIk62jDDd0OLvZK0',
                authDomain: 'contacts-manager-e486f.firebaseapp.com',
                databaseURL: 'https://contacts-manager-e486f.firebaseio.com',
                storageBucket: 'contacts-manager-e486f.appspot.com'
            };
            $firebaseRefProvider.registerUrl({
                default: config.databaseURL,
                contacts: config.databaseURL + '/contacts'
            });
            firebase.initializeApp(config);
        }
    ])
        .run([
        '$transitions',
        '$state',
        'AuthService',
        function ($transitions, $state, AuthService) {
            $transitions.onStart({
                to: function (state) {
                    deugger;
                    return !!(state.data && state.data.requiredAuth);
                }
            }, function () {
                debugger;
                return AuthService.requireAuthentication().catch(function () {
                    return $state.target('auth.login');
                });
            });
            $transitions.onStart({
                to: 'auth.*'
            }, function () {
                debugger;
                if (AuthService.isAuthenticated()) {
                    return $state.target('app');
                }
            });
        }
    ]);
})(angular);
(function (angular) {
    function AuthService($firebaseAuth) {
        var auth = $firebaseAuth();
        var authData = null;
        function storeAuthData(response) {
            authData = response;
            return authData;
        }
        function onSignIn(user) {
            authData = user;
            return auth.$requireSignIn();
        }
        function clearAuthData() {
            authData = null;
        }
        this.login = function (user) {
            return auth
                .$signInWithEmailAndPassword(user.email, user.password)
                .then(storeAuthData);
        };
        this.register = function (user) {
            return auth
                .$createUserWithEmailAndPassword(user.email, user.password)
                .then(storeAuthData);
        };
        this.logout = function () {
            return auth.$signOut().then(clearAuthData);
        };
        this.requireAuthentication = function () {
            return auth.$waitForSignIn().then(onSignIn);
        };
        this.isAuthenticated = function () {
            return !!authData;
        };
        this.getUser = function () {
            if (authData) {
                return authData;
            }
        };
    }
    AuthService.$inject = ['$firebaseAuth'];
    /**
     * @ngdoc service
     * @name AuthService
     * @module components.auth
     *
     * @description Provides HTTP methods for our firebase authentification.
     *
     * ## Lorem Ipsum 1
     * Aenean ornare odio elit, eget facilisis ipsum molestie ac. Nam bibendum a nibh ut ullamcorper.
     * Donec non felis gravida, rutrum ante mattis, sagittis urna. Sed quam quam, facilisis vel cursus at.
     *
     * ## Lorem Ipsum 2
     * Aenean ornare odio elit, eget facilisis ipsum molestie ac. Nam bibendum a nibh ut ullamcorper.
     * Donec non felis gravida, rutrum ante mattis, sagittis urna. Sed quam quam, facilisis vel cursus at.
     */
    angular.module('components.auth').service('AuthService', AuthService);
})(angular);
/**
 *
 * @ngdoc module
 * @name components.contact
 *
 * @requires ui.router
 *
 * @description
 *
 * This is the contact module. It includes all of our components for the contact feature.
 *
 **/
angular
    .module('components.contact', [
    'ui.router'
]);
(function (angular) {
    function ContactService(AuthService, $firebaseRef, $firebaseArray, $firebaseObject) {
        debugger;
        var ref = $firebaseRef.contacts;
        var uid = AuthService.getUser().uid;
        return {
            createNewContact: function (contact) {
                return $firebaseArray(ref.child(uid)).$add(contact);
            },
            getContactById: function (id) {
                return $firebaseObject(ref.child(uid).child(id));
            },
            getContactList: function () {
                return $firebaseArray(ref.child(uid));
            },
            updateContact: function (contact) {
                return contact.$save();
            },
            deleteContact: function (contact) {
                return contact.$remove();
            }
        };
    }
    ContactService.$inject = [
        'AuthService',
        '$firebaseRef',
        '$firebaseArray',
        '$firebaseObject'
    ];
    /**
     * @ngdoc service
     * @name ContactService
     * @module components.contact
     *
     * @description Provides HTTP methods for our firebase connection.
     *
     * ## Lorem Ipsum 1
     * Aenean ornare odio elit, eget facilisis ipsum molestie ac. Nam bibendum a nibh ut ullamcorper.
     * Donec non felis gravida, rutrum ante mattis, sagittis urna. Sed quam quam, facilisis vel cursus at.
     *
     * ## Lorem Ipsum 2
     * Aenean ornare odio elit, eget facilisis ipsum molestie ac. Nam bibendum a nibh ut ullamcorper.
     * Donec non felis gravida, rutrum ante mattis, sagittis urna. Sed quam quam, facilisis vel cursus at.
     */
    angular
        .module('components.contact')
        .factory('ContactService', ContactService);
})(angular);
(function (angular) {
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
    angular.module('components', ['components.contact',]);
})(angular);
(function (angular) {
    /**
     *
     * @ngdoc module
     * @name common
     *
     * @requires ui.router
     * @requires angular-loading-bar
     *
     * @description
     *
     * This is the common module. It includes a run method that setups the loading bar.
     *
     **/
    angular.module('common', ['ui.router', 'angular-loading-bar']).run([
        '$transitions',
        'cfpLoadingBar',
        function ($transitions, cfpLoadingBar) {
            $transitions.onStart({}, cfpLoadingBar.start);
            $transitions.onSuccess({}, cfpLoadingBar.complete);
        }
    ]);
})(angular);
(function (angular) {
    'use strict';
    var app = {
        templateUrl: 'app/common/app.html',
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
    var appNav = {
        bindings: {
            user: '<',
            onLogout: '&'
        },
        templateUrl: 'app/common/app-nav.html'
    };
    angular.module('common').component('appNav', appNav);
})(angular);
(function (angular) {
    var appSidebar = {
        templateUrl: 'app/common/app-sidebar.html',
        controller: 'AppSidebarController'
    };
    angular.module('common').component('appSidebar', appSidebar);
})(angular);
(function (angular) {
    function AppSidebarController() {
        var ctrl = this;
        ctrl.contactTags = [
            {
                label: 'All contacts',
                icon: 'star',
                state: 'none'
            },
            {
                label: 'Friends',
                icon: 'people',
                state: 'friends'
            },
            {
                label: 'Family',
                icon: 'child_care',
                state: 'family'
            },
            {
                label: 'Acquaintances',
                icon: 'accessibility',
                state: 'acquaintances'
            },
            {
                label: 'Following',
                icon: 'remove_red_eye',
                state: 'following'
            }
        ];
    }
    /**
     * @ngdoc type
     * @module common
     * @name AppSidebarController
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
    angular
        .module('common')
        .controller('AppSidebarController', AppSidebarController);
})(angular);
(function (angular) {
    angular.module('root', ['common', 'components']);
    angular.module('root').config([
        '$compileProvider',
        function ($compileProvider) {
            $compileProvider.debugInfoEnabled(true);
        }
    ]);
})(window.angular);
(function (angular) {
    var root = {
        templateUrl: 'app/root.html'
    };
    angular.module('root').component('root', root);
})(angular);
//# sourceMappingURL=app.ui.js.map