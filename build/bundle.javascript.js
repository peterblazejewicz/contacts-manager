const concat = require('concat');
const fsExtra = require('fs-extra');
const chalk = require('chalk');
const log = console.log;
const success = chalk.green;
const error = chalk.red;

fsExtra
    .ensureDir('src/js/')
    .then(results => {
        return concat(
            [
                'node_modules/angular/angular.js',
                'node_modules/angular-ui-router/release/angular-ui-router.js',
                'node_modules/@fortawesome/fontawesome/index.js',
                'node_modules/@fortawesome/fontawesome-free-brands/index.js',
                'node_modules/@fortawesome/fontawesome-free-regular/index.js',
                'node_modules/@fortawesome/fontawesome-free-solid/index.js',
                'node_modules/firebase/firebase.js',
                'node_modules/angularfire/dist/angularfire.js',
                'node_modules/angular-messages/angular-messages.js',
                'node_modules/angular-translate/dist/angular-translate.js',
                'node_modules/angular-loading-bar/build/loading-bar.js'
            ],
            'src/js/vendor.js'
        );
    })
    .then(results => {
        log(success('vendor bundle created'));
    })
    .catch(reason => {
        log(error(reason));
    });
