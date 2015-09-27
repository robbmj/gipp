
var gippInterfaceTests = require('./../../lib/get_suite').gipp_interface;
var getGip = require('./../../lib/get_gipp');

describe('LinkedList Tests Local: gipp-transpiled', function () {
	gippInterfaceTests(getGip.transpiled);
});

describe('LinkedList Tests Local: gipp-bundle', function () {
	gippInterfaceTests(getGip.bundle);
});

describe('LinkedList Tests Local: gipp-min-bundle', function () {
	gippInterfaceTests(getGip.min);
});
