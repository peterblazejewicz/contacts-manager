import * as angular from 'angular';
import { common } from './common/common.module';
import { Root } from './root.component';

/**
 * Import Application Modules
 */

export const root = angular
    .module('root', ['ui.router', common])
    .component('root', new Root())
    .config(
        (
            $locationProvider: angular.ILocationProvider,
            $urlRouterProvider: angular.ui.IUrlRouterProvider
        ) => {
            'ngInject';
            $locationProvider.html5Mode(true);
        }
    ).name;
