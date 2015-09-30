
var getSuite = require('./../../lib/get_suite');
var getGipp = require('./../../lib/get_gipp');
var setUp = require('./../../lib/set_up');

var suites = [
	getSuite.collection_interface,
	getSuite.maxheap
];

describe('MaxHeap Tests Local: gipp-transpiled', function () {
	setUp(suites, getGipp.transpiled, 'MaxHeap');
});

describe('MaxHeap Tests Local: gipp-bundle', function () {
	setUp(suites, getGipp.bundle, 'MaxHeap');
});

describe('MaxHeap Tests Local: gipp-min-bundle', function () {
	setUp(suites, getGipp.min, 'MaxHeap');
});
