(angular => {
    class Root implements angular.IComponentOptions {
        template: string = require('./root.html');
    }

    angular.module('root').component('root', new Root());
})(angular);
