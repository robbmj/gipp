"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _listnode = require("./listnode");

var _listInterface = require("./list.interface");

var _listInterface2 = _interopRequireDefault(_listInterface);

var _exceptions = require("./../exceptions");

exports["default"] = (function () {

	var size = Symbol('size'),
	    head = Symbol('head'),
	    back = Symbol('back');

	console.log("Symbols:", size, head, back);

	return (function (_IList) {
		_inherits(LL, _IList);

		function LL() {
			_classCallCheck(this, LL);

			_get(Object.getPrototypeOf(LL.prototype), "constructor", this).call(this);
			this[size] = 0;
			this[head] = null;
			this[back] = null;
		}

		_createClass(LL, [{
			key: "add",
			value: function add(element) {
				var node = new _listnode.ListNode(element);
				if (this[head] === null) {
					this[head] = node;
					this[back] = this[head];
				} else {
					this[back].next = node;
					this[back] = node;
				}
				this[size] += 1;
			}
		}, {
			key: "contains",
			value: function contains(element) {
				return this.indexOf(element) !== -1;
			}
		}, {
			key: "delete",
			value: function _delete(element) {
				if (this[head].element === element) {
					this.shift();
					return true;
				}

				var next = this[head].next;
				var prev = this[head];

				while (next.element !== element) {
					prev = next;
					next = next.next;

					if (prev === null && next === null) {
						// element is not in the list
						return false;
					}
				}

				if (next === null) {
					// element was the last in the list
					this.pop();
					return true;
				}

				// element was somewhere in the middle;
				prev.next = next.next;
				this[size] -= 1;
				return true;
			}
		}, {
			key: "forEach",
			value: function forEach(cb) {
				var next = this[head];
				while (next !== null) {
					cb(next.element);
					next = next.next;
				}
			}
		}, {
			key: "indexOf",
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
				}
				return lastIndex;
			}
		}, {
			key: "push",
			value: function push(element) {
				this.add(element);
			}

			/**
    * Returns the last element in the list
    */
		}, {
			key: "pop",
			value: function pop() {
				if (this[size] === 0) {
					throw new _exceptions.EmptyListException();
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
		}, {
			key: "shift",
			value: function shift() {
				if (this[size] === 0) {
					throw new _exceptions.EmptyListException();
				}
				var element = this[head].element;
				this[head] = this[head].next;
				this[size] -= 1;
				return element;
			}
		}, {
			key: "unshift",
			value: function unshift(element) {
				var node = new _listnode.ListNode(element);
				node.next = this[head];
				this[head] = node;
				this[size] += 1;
			}
		}, {
			key: "toString",
			value: function toString() {
				var s = "[";
				this.forEach(function (e) {
					s += e + " -> ";
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

		return LL;
	})(_listInterface2["default"]);
})();

module.exports = exports["default"];