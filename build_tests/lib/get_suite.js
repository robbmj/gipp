
var getSuite = (function () {

	var path = require('path');
	var cwd = path.resolve(process.cwd());

	var buildDir = path.normalize(cwd + '/../lib/test_suites/');

	return function (suite) {
		return require(buildDir + suite);
	}
}());

module.exports = {
	collection_interface: getSuite('collection_interface_suite'),
	list_interface: getSuite('list_interface_suite'),
	binarytree_interface: getSuite('binarytree_interface_suite'),
	gipp_interface: getSuite('gipp_interface_suite'),


	avltree: getSuite('avltree_suite'),

	stack: getSuite('stack_suite'),

	listqueue: getSuite('listqueue_suite'),

	maxheap: getSuite('maxheap_suite'),
	minheap: getSuite('minheap_suite')
};
