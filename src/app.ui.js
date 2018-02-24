(function (angular) {
    angular.module('root', ['ui.router']);
})(angular);
(function (angular) {
    angular
        .module('root')
        .config(function ($locationProvider, $urlRouterProvider) {
        'ngInject';
        $locationProvider.html5Mode(true);
    });
})(angular);
(function (angular) {
    var Root = /** @class */ (function () {
        function Root() {
            this.template = require('./root.html');
        }
        return Root;
    }());
    angular.module('root').component('root', new Root());
})(angular);
var bootstrapModuleName = angular.module('contacts.manager', ['root']).name;
//# sourceMappingURL=app.ui.js.map