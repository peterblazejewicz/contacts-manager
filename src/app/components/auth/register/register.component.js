(function(angular) {
    'use strict';

    var register = {
        templateUrl: './register.html',
        controller: 'RegisterController'
    };

    angular
        .module('components.auth')
        .component('register', register)
        .config([
            '$stateProvider',
            function($stateProvider) {
                $stateProvider.state('auth.register', {
                    url: '/register',
                    component: 'register'
                });
            }
        ]);
})(angular);
