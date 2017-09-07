/**
 * Import the polyfills and vendor files
 */
import './polyfills';
import './vendors';

/**
 * Import the global styles
 */
import './index.scss';

/**
 * Import angular
 */
import * as angular from 'angular';

/**
 *  Import module to be bootstrapped
 */
import { root as rootModule } from './app/root.module';

/**
 * Bootstrap the application using the imported moduleName
 */
const bootstrapModuleName = angular.module('contacts.manager', [rootModule])
    .name;
