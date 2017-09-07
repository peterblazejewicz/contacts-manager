import * as angular from 'angular';

export const common = angular.module('common', [
    'cfp.loadingBar'
])
.run(($transitions: any, cfpLoadingBar: any) => {
    'ngInject';
    $transitions.onStart({}, cfpLoadingBar.start);
    $transitions.onSuccess({}, cfpLoadingBar.complete);
})
.name;
