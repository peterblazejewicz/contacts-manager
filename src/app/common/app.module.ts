/**
 * @ngdoc module
 * @name common
 * @requires ui.router
 * @requires angular-loading-bar
 * @description common module
 */
(angular => {
    angular
        .module('common', ['ui.router', 'angular-loading-bar'])
        // @ts-ignore
        .run([
            '$transitions',
            'cfpLoadingBar',
            ($transitions: any, cfpLoadingBar: any) => {
                $transitions.onStart({}, cfpLoadingBar.start);
                $transitions.onSuccess({}, cfpLoadingBar.complete);
            }
        ]);
})(angular);
