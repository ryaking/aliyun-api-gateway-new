'use strict';

var pkg = require('../package.json');

module.exports = `${pkg.name}/${pkg.version} Node.js/${process.version}`;