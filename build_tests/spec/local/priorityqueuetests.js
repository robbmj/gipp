
var getSuite = require('./../../lib/get_suite');
var getGipp = require('./../../lib/get_gipp');
var setUp = require('./../../lib/set_up');

var suites = [
	getSuite.collection_interface,
	getSuite.queue_interface,
	getSuite.priorityqueue
];

describe('PriorityQueue Tests Local: gipp-transpiled', function () {
	setUp(suites, getGipp.transpiled, 'PriorityQueue');
});

describe('PriorityQueue Tests Local: gipp-bundle', function () {
	setUp(suites, getGipp.bundle, 'PriorityQueue');
});

describe('PriorityQueue Tests Local: gipp-min-bundle', function () {
	setUp(suites, getGipp.min, 'PriorityQueue');
});
