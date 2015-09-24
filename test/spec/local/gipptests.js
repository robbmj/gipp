
var gippInterfaceTests = require('./../../lib/gipp_interface_tests');
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
