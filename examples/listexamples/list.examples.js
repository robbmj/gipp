
var gip = require('./../../build/min/gip.bundle.js');

var babel = require("babel-core");

var classes = ['LinkedList', 'DoubleLinkedList'];

var buffer = [];

var print = console.log;

console.log = function (item) {
	buffer.push(item);
}

/** example usage of addAll and forEach */
run(classes, ['addAll', 'forEach'], function _() {
	var list = gip.LinkedList();
	list.addAll(1,2,3);

	list.forEach(function (e) {
		console.log(e);
	});
});

/** example usage of pushAll and pop */
run(classes, ['unshiftAll', 'shift', 'size'], function _() {
	var list = gip.LinkedList();
	list.pushAll(1,2,3);

	while (list.size > 0) {
		console.log(list.pop());
	}
});

run(classes, ['unshiftAll', 'shift', 'isEmpty'], function _() {
	var list = gip.LinkedList();
	list.unshiftAll(1,2,3);

	while (!list.isEmpty) {
		console.log(list.shift());
	}
});


function run(classes, methods, code) {
	//console.log('Example usage of: ' + methods.join(', '));
	//console.log(code.toString());
	// transpile the function, then remove "use strict"
	var transpiled = babel.transform(code, { optional: ["runtime"] }).code.substring(13).trim();
	// turn it into an IIFE
	transpiled = '(' + transpiled + '());';
	eval(transpiled);

	print(buffer);
	buffer = [];
}
