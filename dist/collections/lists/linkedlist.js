"use strict";

var _get = require("babel-runtime/helpers/get")["default"];

var _inherits = require("babel-runtime/helpers/inherits")["default"];

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _Symbol = require("babel-runtime/core-js/symbol")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _listnode = require("./listnode");

var _listInterface = require("./list.interface");

var _listInterface2 = _interopRequireDefault(_listInterface);

var _exceptions = require("./../exceptions");

exports["default"] = (function () {

	var size = _Symbol('size'),
	    head = _Symbol('head'),
	    back = _Symbol('back');

	return (function (_IList) {
		_inherits(LinkedList, _IList);

		/**
   * Creates an empty singly linked list
   *
   * Time Complexity O(1)
   * Space Complexity O(1)
   */

		function LinkedList() {
			_classCallCheck(this, LinkedList);

			_get(Object.getPrototypeOf(LinkedList.prototype), "constructor", this).call(this);
			this[size] = 0;
			this[head] = null;
			this[back] = null;
		}

		/**
   * ${super.documentation()}
   *
   * Time Complexity O(1)
   * Space Complexity O(1)
   */

		_createClass(LinkedList, [{
			key: "add",
			value: function add(element) {
				var node = new _listnode.ListNode(element);
				if (this[head] === null) {
					this[head] = node;
					this[back] = node;
				} else {
					this[back].next = node;
					this[back] = node;
				}
				this[size] += 1;
				return this;
			}

			/**
    * ${super.documentation()}
    *
    * Time Complexity O(n)
    * Space Complexity O(1)
    */
		}, {
			key: "addAll",
			value: function addAll() {
				for (var _len = arguments.length, elements = Array(_len), _key = 0; _key < _len; _key++) {
					elements[_key] = arguments[_key];
				}

				var i = 0,
				    len = elements.length;
				for (; i < len; i += 1) {
					this.add(elements[i]);
				}
				return this;
			}

			/**
    * ${super.documentation()}
    *
    * Time Complexity O(n)
    * Space Complexity O(1)
    */
		}, {
			key: "contains",
			value: function contains(element) {
				return this.indexOf(element) !== -1;
			}

			/**
    * ${super.documentation()}
    *
    * Time Complexity O(n)
    * Space Complexity O(1)
    */
		}, {
			key: "delete",
			value: function _delete(element) {
				if (this[size] === 0) {
					throw new EmptyCollectionError('Can\'t delete from an empty LinkedList');
				}

				if (this[head].element === element) {
					this.shift();
					return true;
				}

				if (this[size] === 1) {
					return false;
				}

				var next = this[head].next;
				var prev = this[head];

				while (next.element !== element) {
					prev = next;
					next = next.next;

					if (next === null) {
						// element is not in the list
						return false;
					}
				}

				if (next === this[back]) {
					// element was the last in the list
					this.pop();
					return true;
				}

				// element was somewhere in the middle;
				prev.next = next.next;
				this[size] -= 1;
				return true;
			}

			/**
    * ${super.documentation()}
    *
    * Time Complexity O(n)
    * Space Complexity O(1)
    */
		}, {
			key: "forEach",
			value: function forEach(cb) {
				_get(Object.getPrototypeOf(LinkedList.prototype), "_throwIfNotFunction", this).call(this, cb);
				var next = this[head];
				while (next !== null) {
					cb(next.element);
					next = next.next;
				}
				return this;
			}

			/**
    * ${super.documentation()}
    *
    * Time Complexity O(n)
    * Space Complexity O(n)
    */
		}, {
			key: "map",
			value: function map(cb) {
				_get(Object.getPrototypeOf(LinkedList.prototype), "_throwIfNotFunction", this).call(this, cb);
				var newList = new LinkedList();
				var next = this[head];
				while (next !== null) {
					if (cb(next.element)) {
						newList.add(next.element);
					}
					next = next.next;
				}
				return newList;
			}

			/**
    * ${super.documentation()}
    *
    * Time Complexity O(1)
    * Space Complexity O(1)
    */
		}, {
			key: "indexOf",

			/**
    * ${super.documentation()}
    *
   	 * Time Complexity: O(n)
   	 * Space Complexity: O(1)
    */
			value: function indexOf(element) {
				if (this[size] === 0) {
					return -1;
				}
				var i = 0;
				var next = this[head];
				while (next.element !== element) {
					next = next.next;
					i++;
					if (next === null) {
						return -1;
					}
				}
				return i;
			}

			/**
    * ${super.documentation()}
    *
   	 * Time Complexity: O(n)
   	 * Space Complexity: O(1)
    */
		}, {
			key: "lastIndexOf",
			value: function lastIndexOf(element) {
				if (this[size] === 0) {
					return -1;
				}
				var i = 0;
				var lastIndex = -1;
				var next = this[head];
				while (next !== null) {
					if (next.element === element) {
						lastIndex = i;
					}
					i++;
					next = next.next;
				}
				return lastIndex;
			}

			/**
    * ${super.documentation()}
    *
    * Time Complexity O(1)
    * Space Complexity O(1)
    */
		}, {
			key: "pop",
			value: function pop() {
				if (this[size] === 0) {
					throw new EmptyCollectionError('Can\'t pop on an empty LinkedList');
				}
				if (this[size] === 1) {
					var ret = this[head].element;
					this[head] = null;
					this[size] = 0;
					return ret;
				}
				var last = this[back];
				var next = this[head];
				while (next.next !== last) {
					next = next.next;
				}
				this.last = next;
				next.next = null;
				this[size] -= 1;
				return last.element;
			}

			/**
    *${super.documentation()}
    *
    * Time Complexity O(1)
    * Space Complexity O(1)
    */
		}, {
			key: "push",
			value: function push(element) {
				return this.add(element);
			}

			/**
    * ${super.documentation()}
    *
    * Time Complexity O(n)
    * Space Complexity O(1)
    */
		}, {
			key: "pushAll",
			value: function pushAll() {
				return this.addAll.apply(this, arguments);
			}

			/**
    * ${super.documentation()}
    *
    * Time Complexity O(1)
    * Space Complexity O(1)
    */
		}, {
			key: "shift",
			value: function shift() {
				if (this[size] === 0) {
					throw new EmptyCollectionError('Can\'t shift on an empty LinkedList');
				}
				var element = this[head].element;
				this[head] = this[size] === 1 ? null : this[head].next;
				this[size] -= 1;
				return element;
			}

			/**
    * ${super.documentation()}
    *
    * Time Complexity O(1)
    * Space Complexity O(1)
    */
		}, {
			key: "unshift",
			value: function unshift(element) {
				var node = new _listnode.ListNode(element);
				node.next = this[head];
				this[head] = node;
				this[size] += 1;
				return this;
			}

			/**
    * ${super.documentation()}
    *
    * Time Complexity O(n)
    * Space Complexity O(1)
    */
		}, {
			key: "unshiftAll",
			value: function unshiftAll() {
				for (var _len2 = arguments.length, elements = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
					elements[_key2] = arguments[_key2];
				}

				var i = elements.length - 1;
				for (; i >= 0; i -= 1) {
					this.unshift(elements[i]);
				}
				return this;
			}

			/**
    * Returns a string representation of the collection.
    *
    * Time Complexity O(n)
    * Space Complexity O(n)
    */
		}, {
			key: "toString",
			value: function toString() {
				var s = "[";
				this.forEach(function (e) {
					return s += e + " -> ";
				});
				if (s.length > 1) {
					s = s.substring(0, s.length - 4);
				}
				return s + "]";
			}
		}, {
			key: "size",
			get: function get() {
				return this[size];
			}
		}]);

		return LinkedList;
	})(_listInterface2["default"]);
})();

module.exports = exports["default"];