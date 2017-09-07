import * as angular from 'angular';
import { Root } from './root.component';

/**
 * Import Application Modules
 */

export const root = angular
    .module('root', ['ui.router'])
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
