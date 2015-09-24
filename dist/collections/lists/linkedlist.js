"use strict";

var _get = require("babel-runtime/helpers/get")["default"];

var _inherits = require("babel-runtime/helpers/inherits")["default"];

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _Symbol$iterator = require("babel-runtime/core-js/symbol/iterator")["default"];

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _private__listnodes = require("./private/__listnodes");

var _listInterface = require("./list.interface");

var _listInterface2 = _interopRequireDefault(_listInterface);

var _collectionInterface = require("./../collection.interface");

var _collectionInterface2 = _interopRequireDefault(_collectionInterface);

var _exceptions = require("./../exceptions");

var _private__listsymbols = require('./private/__listsymbols');

var _private__listsymbols2 = _interopRequireDefault(_private__listsymbols);

exports["default"] = (function (size, head, back, cmpf) {

	/**
  * @classdesc Singly Linked List
  * @implements {List}
  */

	var LinkedList = (function (_List) {
		_inherits(LinkedList, _List);

		// Time Complexity: O(1), Space Complexity: O(1)
		/**
   * Creates an empty singly linked list
   *
   * @param {cmpFtn?} - If no comparison function is passed then the [default comparison function]{@link Collection#cmpFtn} is used.
   */

		function LinkedList() {
			var cmpFtn = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

			_classCallCheck(this, LinkedList);

			_get(Object.getPrototypeOf(LinkedList.prototype), "constructor", this).call(this);
			this[size] = 0;
			this[head] = null;
			this[back] = null;
			this[cmpf] = cmpFtn || _collectionInterface2["default"].cmpFtn;
		}

		// Time Complexity: O(1), Space Complexity: O(1)

		_createClass(LinkedList, [{
			key: _Symbol$iterator,

			// Time Complexity: O(n) where n is the size of the list, Space Complexity: O(1)
			value: _regeneratorRuntime.mark(function value() {
				var next;
				return _regeneratorRuntime.wrap(function value$(context$3$0) {
					while (1) switch (context$3$0.prev = context$3$0.next) {
						case 0:
							next = this[head];

						case 1:
							if (!(next != null)) {
								context$3$0.next = 6;
								break;
							}

							context$3$0.next = 4;
							return next.element;

						case 4:
							context$3$0.next = 1;
							break;

						case 6:
						case "end":
							return context$3$0.stop();
					}
				}, value, this);
			})

			// Time Complexity: O(1), Space Complexity: O(1)
		}, {
			key: "add",
			value: function add(element) {
				var node = new _private__listnodes.ListNode(element);
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

			// Time Complexity: O(n) where n is the size of elements, Space Complexity: O(1)
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

			// Time Complexity: O(n) where n is the size of the list, Space Complexity: O(1)
		}, {
			key: "contains",
			value: function contains(element) {
				return this.indexOf(element) !== -1;
			}

			// Time Complexity: O(n) where n is the size of the list, Space Complexity: O(1)
		}, {
			key: "delete",
			value: function _delete(element) {
				if (this[size] === 0) {
					throw new EmptyCollectionError('Can\'t delete from an empty LinkedList');
				}

				if (this[cmpf](this[head].element, element) === 0) {
					this.shift();
					return true;
				}

				if (this[size] === 1) {
					return false;
				}

				var next = this[head].next;
				var prev = this[head];

				while (this[cmpf](next.element, element) !== 0) {
					prev = next;
					next = next.next;

					if (next === null) {
						// element is not in the list
						return false;
					}
				}

				if (next === this[back]) {
					// element was the last in the list
					prev.next = null;
					this[size] -= 1;
					return true;
				}

				// element was somewhere in the middle;
				prev.next = next.next;
				this[size] -= 1;
				return true;
			}

			// Time Complexity: O(n) where n is the size of the list, Space Complexity: O(1)
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

			// Time Complexity: O(n) where n is the size of the list, Space Complexity: O(n) where n is the size of the list
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

			// Time Complexity: O(n) where n is the size of the list, Space Complexity: O(1)
		}, {
			key: "indexOf",
			value: function indexOf(element) {
				if (this[size] === 0) {
					return -1;
				}
				var i = 0;
				var next = this[head];
				while (this[cmpf](next.element, element) !== 0) {
					next = next.next;
					i++;
					if (next === null) {
						return -1;
					}
				}
				return i;
			}

			// Time Complexity: O(n) where n is the size of the list, Space Complexity: O(1)
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
					if (this[cmpf](next.element, element) === 0) {
						lastIndex = i;
					}
					i++;
					next = next.next;
				}
				return lastIndex;
			}

			// Time Complexity: O(n) where n is the size of the list, Space Complexity: O(1)
		}, {
			key: "pop",
			value: function pop() {
				if (this[size] === 0) {
					throw new EmptyCollectionError('Can\'t pop on an empty LinkedList');
				}
				if (this[size] === 1) {
					var ret = this[head].element;
					this[head] = null;
					this[back] = null;
					this[size] = 0;
					return ret;
				}
				var last = this[back];
				var next = this[head];
				while (next.next !== last) {
					next = next.next;
				}
				this[back] = next;
				next.next = null;
				this[size] -= 1;
				return last.element;
			}

			// Time Complexity: O(1), Space Complexity: O(1)
		}, {
			key: "push",
			value: function push(element) {
				return this.add(element);
			}

			// Time Complexity: O(n) where n is the size of elements, Space Complexity: O(1)
		}, {
			key: "pushAll",
			value: function pushAll() {
				return this.addAll.apply(this, arguments);
			}

			// Time Complexity: O(1), Space Complexity: O(1)
		}, {
			key: "shift",
			value: function shift() {
				if (this[size] === 0) {
					throw new EmptyCollectionError('Can\'t shift on an empty LinkedList');
				}
				var element = this[head].element;

				if (this[size] === 1) {
					this[head] = null;
					this[back] = null;
				} else {
					this[head] = this[head].next;;
				}

				this[size] -= 1;
				return element;
			}

			// Time Complexity: O(1), Space Complexity: O(1)
		}, {
			key: "unshift",
			value: function unshift(element) {
				if (this[size] === 0) {
					return this.add(element);
				}
				var node = new _private__listnodes.ListNode(element);
				node.next = this[head];
				this[head] = node;
				this[size] += 1;
				return this;
			}

			// Time Complexity: O(1), Space Complexity: O(1)
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

			// Time Complexity: O(n) where n is the size of the list, Space Complexity: O(n) where n is the size of the list
			/**
    * Returns a string representation of the collection.
    *
    * @return {String} A string representation of the collection.
    */
		}, {
			key: "toString",
			value: function toString() {
				return this._toStr(function (e) {
					return e + " -> ";
				});
			}
		}, {
			key: "_toStr",
			value: function _toStr(cb) {
				var trimBy = arguments.length <= 1 || arguments[1] === undefined ? 4 : arguments[1];

				var s = "[";
				this.forEach(function (e) {
					s += cb(e);
				});
				if (s.length > 1) {
					s = s.substring(0, s.length - trimBy);
				}
				return s + "]";
			}
		}, {
			key: "size",
			get: function get() {
				return this[size];
			}

			// Time Complexity: O(1), Space Complexity: O(1)
		}, {
			key: "isEmpty",
			get: function get() {
				return this[size] === 0;
			}
		}]);

		return LinkedList;
	})(_listInterface2["default"]);

	return LinkedList;
})(_private__listsymbols2["default"].SIZE, _private__listsymbols2["default"].HEAD, _private__listsymbols2["default"].BACK, _private__listsymbols2["default"].CMPF);

module.exports = exports["default"];