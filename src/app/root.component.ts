(angular => {
    class Root implements angular.IComponentOptions {
        templateUrl: string = './app/root.template.html';
    }

    angular.module('root').component('root', new Root());
})(angular);
