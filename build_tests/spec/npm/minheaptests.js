
var getSuite = require('./../../lib/get_suite');
var setUp = require('./../../lib/set_up');

var suites = [
	getSuite.collection_interface,
	getSuite.minheap
];

describe('MinHeap Tests From NPM: gipp-transpiled', function () {
	setUp(suites, require('gipp-transpiled'), 'MinHeap');
});

describe('MinHeap Tests From NPM: gipp-bundle', function () {
	setUp(suites, require('gipp-bundle/gipp.bundle'), 'MinHeap');
});

describe('MinHeap Tests From NPM: gipp-min-bundle', function () {
	setUp(suites, require('gipp-min-bundle/gipp.bundle'), 'MinHeap');
});
