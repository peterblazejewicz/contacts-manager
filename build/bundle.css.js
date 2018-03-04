const concat = require('concat');
const fsExtra = require('fs-extra');
const chalk = require('chalk');
const log = console.log;
const success = chalk.green;
const error = chalk.red;

fsExtra
    .ensureDir('src/css/')
    .then(results => {
        return concat(
            [
                'node_modules/bootstrap/dist/css/bootstrap.css',
                'node_modules/angular-loading-bar/build/loading-bar.css'
            ],
            'src/css/vendor.css'
        );
    })
    .then(results => {
        log(success('vendor bundle created'));
    })
    .catch(reason => {
        log(error(reason));
    });
