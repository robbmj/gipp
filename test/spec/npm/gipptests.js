
var gippInterfaceTests = require('./../../lib/gipp_interface_tests');

describe('LinkedList Tests Local: gipp-transpiled', function () {
	gippInterfaceTests(require('gipp-transpiled'));
});

describe('LinkedList Tests Local: gipp-bundle', function () {
	gippInterfaceTests(require('gipp-bundle/gipp.bundle'));
});

describe('LinkedList Tests Local: gipp-min-bundle', function () {
	gippInterfaceTests(require('gipp-min-bundle/gipp.bundle'));
});
