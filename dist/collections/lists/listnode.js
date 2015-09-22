'use strict';

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _get = require('babel-runtime/helpers/get')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _Symbol = require('babel-runtime/core-js/symbol')['default'];

Object.defineProperty(exports, '__esModule', {
	value: true
});

var ListNode = (function () {

	var elem = _Symbol('elem'),
	    next = _Symbol('next');

	return (function () {
		function ListNode(element) {
			_classCallCheck(this, ListNode);

			this[elem] = element;
			this[next] = null;
		}

		_createClass(ListNode, [{
			key: 'element',
			get: function get() {
				return this[elem];
			},
			set: function set(element) {
				this[elem] = element;
			}
		}, {
			key: 'next',
			get: function get() {
				return this[next];
			},
			set: function set(node) {
				this[next] = node;
			}
		}]);

		return ListNode;
	})();
})();

var DListNode = (function () {

	var prev = _Symbol('prev');

	return (function (_ListNode) {
		_inherits(DListNode, _ListNode);

		function DListNode(element) {
			_classCallCheck(this, DListNode);

			_get(Object.getPrototypeOf(DListNode.prototype), 'constructor', this).call(this, element);
		}

		_createClass(DListNode, [{
			key: 'prev',
			get: function get() {
				return this[prev];
			},
			set: function set(node) {
				this[prev] = node;
			}
		}]);

		return DListNode;
	})(ListNode);
})();

exports['default'] = { ListNode: ListNode, DListNode: DListNode };
module.exports = exports['default'];