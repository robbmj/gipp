
var getSuite = require('./../../lib/get_suite');
var getGipp = require('./../../lib/get_gipp');
var setUp = require('./../../lib/set_up');

var suites = [
	getSuite.collection_interface,
	getSuite.listqueue
];

describe('ListQueue Tests Local: gipp-transpiled', function () {
	setUp(suites, getGipp.transpiled, 'ListQueue');
});

describe('ListQueue Tests Local: gipp-bundle', function () {
	setUp(suites, getGipp.bundle, 'ListQueue');
});

describe('ListQueue Tests Local: gipp-min-bundle', function () {
	setUp(suites, getGipp.min, 'ListQueue');
});
