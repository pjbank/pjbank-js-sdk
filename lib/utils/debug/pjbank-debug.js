'use strict';

const colors = require('colors/safe');

const Debug = {

    //Success Logs
    success: ((log) => {
        console.log(colors.green(JSON.stringify(log)));
    }),
    //Info Logs
    info: ((log) => {
        console.log(colors.blue(JSON.stringify(log)));
    }),
    //Warning Logs
    warn: ((log) => {
        console.log(colors.yellow(JSON.stringify(log)));
    }),
    //Error Logs
    error: ((log) => {
        console.log(colors.red(JSON.stringify(log)));
    })

};

module.exports = Debug;