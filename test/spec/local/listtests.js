
var listInterfaceTests = require('./../../lib/list_interface_tests');
var getGip = require('./../../lib/get_gipp');
var setUp = require('./../../lib/set_up');


describe('LinkedList Tests Local: gipp-transpiled', function () {
	setUp(listInterfaceTests, getGip.transpiled, 'LinkedList');
});

describe('LinkedList Tests Local: gipp-bundle', function () {
	setUp(listInterfaceTests, getGip.bundle, 'LinkedList');
});

describe('LinkedList Tests Local: gipp-min-bundle', function () {
	setUp(listInterfaceTests, getGip.min, 'LinkedList');
});


describe('DoubleLinkedList Tests Local: gipp-transpiled', function () {
	setUp(listInterfaceTests, getGip.transpiled, 'DoubleLinkedList');
});

describe('DoubleLinkedList Tests Local: gipp-bundle', function () {
	setUp(listInterfaceTests, getGip.bundle, 'DoubleLinkedList');
});

describe('DoubleLinkedList Tests Local: gipp-min-bundle', function () {
	setUp(listInterfaceTests, getGip.min, 'DoubleLinkedList');
});


