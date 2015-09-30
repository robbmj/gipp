
var getSuite = require('./../../lib/get_suite');
var setUp = require('./../../lib/set_up');

var suites = [
	getSuite.collection_interface,
	getSuite.binarytree_interface,
	getSuite.avltree
];

describe('AVLTree Tests From NPM: gipp-transpiled', function () {
	setUp(suites, require('gipp-transpiled'), 'AVLTree');
});

describe('AVLTree Tests From NPM: gipp-transpiled', function () {
	setUp(suites, require('gipp-bundle/gipp.bundle'), 'AVLTree');
});

describe('AVLTree Tests From NPM: gipp-transpiled', function () {
	setUp(suites, require('gipp-min-bundle/gipp.bundle'), 'AVLTree');
});

