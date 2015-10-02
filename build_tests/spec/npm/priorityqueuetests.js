
var getSuite = require('./../../lib/get_suite');
var setUp = require('./../../lib/set_up');

var suites = [
	getSuite.collection_interface,
	getSuite.queue_interface,
	getSuite.priorityqueue
];

describe('PriorityQueue Tests Local: gipp-transpiled', function () {
	setUp(suites, require('gipp-transpiled'), 'PriorityQueue');
});

describe('PriorityQueue Tests Local: gipp-bundle', function () {
	setUp(suites, require('gipp-bundle/gipp.bundle'), 'PriorityQueue');
});

describe('PriorityQueue Tests Local: gipp-min-bundle', function () {
	setUp(suites, require('gipp-min-bundle/gipp.bundle'), 'PriorityQueue');
});
