
var getSuite = require('./../../lib/get_suite');
var getGipp = require('./../../lib/get_gipp');
var setUp = require('./../../lib/set_up');

var suites = [
	getSuite.collection_interface,
	getSuite.stack
];

describe('Stack Tests Local: gipp-transpiled', function () {
	setUp(suites, getGipp.transpiled, 'Stack');
});

describe('Stack Tests Local: gipp-bundle', function () {
	setUp(suites, getGipp.bundle, 'Stack');
});

describe('Stack Tests Local: gipp-min-bundle', function () {
	setUp(suites, getGipp.min, 'Stack');
});
