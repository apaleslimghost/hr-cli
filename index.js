#!/usr/bin/env node

var argv = require('minimist')(process.argv.slice(2));
var hr = require('@quarterto/hr');

console.log(hr(argv.c || argv.character, argv.w || argv.width));
