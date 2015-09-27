
var gippInterfaceTests = require('./../../lib/get_suite').gipp_interface;

describe('LinkedList Tests From NPM: gipp-transpiled', function () {
	gippInterfaceTests(require('gipp-transpiled'));
});

describe('LinkedList Tests From NPM: gipp-bundle', function () {
	gippInterfaceTests(require('gipp-bundle/gipp.bundle'));
});

describe('LinkedList Tests From NPM: gipp-min-bundle', function () {
	gippInterfaceTests(require('gipp-min-bundle/gipp.bundle'));
});
