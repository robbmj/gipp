
var gip = require('./../../build/min/gip.bundle.js');

/** example usage of addAll and forEach */
(function () {
	var list = gip.LinkedList();
	list.addAll(1,2,3,4,5,6);

	list.forEach(function (e) {
		console.log(e);
	});
}());

/** example usage of pushAll and pop */
(function () {
	var list = gip.LinkedList();
	list.pushAll(1,2,3,4,5,6);

	while (list.size > 0) {
		console.log(list.pop());
	}
}());


run(['LinkedList', 'DoubleLinkedList'], ['unshiftAll', 'shift'], function () {
	var list = gip.LinkedList();
	list.unshiftAll(1,2,3,4,5,6);

	while (list.size > 0) {
		console.log(list.shift());
	}
});


function run(methods, code) {
	console.log('Example usage of: ' + methods.join(', '));
	console.log(code.toString());
	code();
}
