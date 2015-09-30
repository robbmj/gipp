
var getSuite = require('./../../lib/get_suite');
var getGipp = require('./../../lib/get_gipp');
var setUp = require('./../../lib/set_up');

var suites = [
	getSuite.collection_interface,
	getSuite.minheap
];

describe('MinHeap Tests Local: gipp-transpiled', function () {
	setUp(suites, getGipp.transpiled, 'MinHeap');
});

describe('MinHeap Tests Local: gipp-bundle', function () {
	setUp(suites, getGipp.bundle, 'MinHeap');
});

describe('MinHeap Tests Local: gipp-min-bundle', function () {
	setUp(suites, getGipp.min, 'MinHeap');
});
