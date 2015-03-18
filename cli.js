#!/usr/bin/env node

var main = require('./index');

var argList = Array.prototype.slice.call(process.argv, 2)

main(argList[0], function (err) {
    if (err) {
        console.error(err);
        return process.exit(1);
    }
    process.exit(0);
});
