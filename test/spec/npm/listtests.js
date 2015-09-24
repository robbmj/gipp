
var listInterfaceTests = require('./../../lib/list_interface_tests');
var setUp = require('./../../lib/set_up');


describe('LinkedList Tests Local: gipp-transpiled', function () {
	setUp(listInterfaceTests, require('gipp-transpiled'), 'LinkedList');
});

describe('LinkedList Tests Local: gipp-bundle', function () {
	setUp(listInterfaceTests, require('gipp-bundle/gipp.bundle'), 'LinkedList');
});

describe('LinkedList Tests Local: gipp-min-bundle', function () {
	setUp(listInterfaceTests, require('gipp-min-bundle/gipp.bundle'), 'LinkedList');
});

describe('DoubleLinkedList Tests Local: gipp-transpiled', function () {
	setUp(listInterfaceTests, require('gipp-transpiled'), 'DoubleLinkedList');
});

describe('DoubleLinkedList Tests Local: gipp-bundle', function () {
	setUp(listInterfaceTests, require('gipp-bundle/gipp.bundle'), 'DoubleLinkedList');
});

describe('DoubleLinkedList Tests Local: gipp-min-bundle', function () {
	setUp(listInterfaceTests, require('gipp-min-bundle/gipp.bundle'), 'DoubleLinkedList');
});
