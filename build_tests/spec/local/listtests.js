
var getSuite = require('./../../lib/get_suite');
var getGipp = require('./../../lib/get_gipp');
var setUp = require('./../../lib/set_up');

var suites = [
	getSuite.collection_interface,
	getSuite.list_interface
];

describe('LinkedList Tests Local: gipp-transpiled', function () {
	setUp(suites, getGipp.transpiled, 'LinkedList');
});

describe('LinkedList Tests Local: gipp-bundle', function () {
	setUp(suites, getGipp.bundle, 'LinkedList');
});

describe('LinkedList Tests Local: gipp-min-bundle', function () {
	setUp(suites, getGipp.min, 'LinkedList');
});


describe('DoubleLinkedList Tests Local: gipp-transpiled', function () {
	setUp(suites, getGipp.transpiled, 'DoubleLinkedList');
});

describe('DoubleLinkedList Tests Local: gipp-bundle', function () {
	setUp(suites, getGipp.bundle, 'DoubleLinkedList');
});

describe('DoubleLinkedList Tests Local: gipp-min-bundle', function () {
	setUp(suites, getGipp.min, 'DoubleLinkedList');
});
