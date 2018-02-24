(angular => {
    angular
        .module('root')
        .config(
            (
                $locationProvider: angular.ILocationProvider,
                $urlRouterProvider: angular.ui.IUrlRouterProvider
            ) => {
                'ngInject';
                $locationProvider.html5Mode(true);
            }
        );
})(angular);
