
var getSuite = require('./../../lib/get_suite');
var setUp = require('./../../lib/set_up');

var suites = [
	getSuite.collection_interface,
	getSuite.list_interface
];

describe('LinkedList Tests From NPM: gipp-transpiled', function () {
	setUp(suites, require('gipp-transpiled'), 'LinkedList');
});

describe('LinkedList Tests From NPM: gipp-bundle', function () {
	setUp(suites, require('gipp-bundle/gipp.bundle'), 'LinkedList');
});

describe('LinkedList Tests From NPM: gipp-min-bundle', function () {
	setUp(suites, require('gipp-min-bundle/gipp.bundle'), 'LinkedList');
});

describe('DoubleLinkedList Tests From NPM: gipp-transpiled', function () {
	setUp(suites, require('gipp-transpiled'), 'DoubleLinkedList');
});

describe('DoubleLinkedList Tests From NPM: gipp-bundle', function () {
	setUp(suites, require('gipp-bundle/gipp.bundle'), 'DoubleLinkedList');
});

describe('DoubleLinkedList Tests From NPM: gipp-min-bundle', function () {
	setUp(suites, require('gipp-min-bundle/gipp.bundle'), 'DoubleLinkedList');
});
