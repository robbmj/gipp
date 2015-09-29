
var getSuite = require('./../../lib/get_suite');
var getGipp = require('./../../lib/get_gipp');
var setUp = require('./../../lib/set_up');

var suites = [
	getSuite.collection_interface,
	getSuite.binarytree_interface,
	getSuite.avltree
];

describe('AVLTree Tests Local: gipp-transpiled', function () {
	setUp(suites, getGipp.transpiled, 'AVLTree');
});

describe('AVLTree Tests Local: gipp-transpiled', function () {
	setUp(suites, getGipp.bundle, 'AVLTree');
});

describe('AVLTree Tests Local: gipp-transpiled', function () {
	setUp(suites, getGipp.min, 'AVLTree');
});

