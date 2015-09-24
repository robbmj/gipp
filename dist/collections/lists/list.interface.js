"use strict";

var _get = require("babel-runtime/helpers/get")["default"];

var _inherits = require("babel-runtime/helpers/inherits")["default"];

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _collectionInterface = require("./../collection.interface");

var _collectionInterface2 = _interopRequireDefault(_collectionInterface);

var _exceptions = require("./../exceptions");

/**
 * The parent interface for all Gipp Lists
 * @interface
 * @augments Collection
 */

var List = (function (_Collection) {
	_inherits(List, _Collection);

	/**
  * @throws {UnimplementedError} If directly instantiated.
  */

	function List() {
		_classCallCheck(this, List);

		_get(Object.getPrototypeOf(List.prototype), "constructor", this).call(this);
		if (this.constructor.name === 'List') {
			throw new _exceptions.UnimplementedError('List');
		}
	}

	/**
  * The indexOf() method returns the first index at which a given element can be found in the list, or -1 if it is not present.
  *
  * @param {E} element - The element to locate in the list.
  * @return {number} The first index at which a given element can be found in the list, or -1 if it is not present.
  */

	_createClass(List, [{
		key: "indexOf",
		value: function indexOf(element) {
			throw new _exceptions.UnimplementedError('indexOf');
		}

		/**
   * The lastIndexOf() method returns the last index at which a given element can be found in the list, or -1 if it is not present.
   *
   * @param {E} element - The element to locate in the list.
   * @return {number} The last index at which a given element can be found in the list, or -1 if it is not present.
   */
	}, {
		key: "lastIndexOf",
		value: function lastIndexOf(element) {
			throw new _exceptions.UnimplementedError('lastIndexOf');
		}

		/**
   * Returns the last element in the list.
   *
   * @throws {EmptyCollectionError} If no elements are contained within the collection.
   *
   * @return {E} The last element in the list.
   */
	}, {
		key: "pop",
		value: function pop() {
			throw new _exceptions.UnimplementedError('pop');
		}

		/**
   * Appends element to the end of the list.
   *
   * @param {E} element - the element to be appended to the list.
   * @return {List} Returns this list.
   */
	}, {
		key: "push",
		value: function push(element) {
			throw new _exceptions.UnimplementedError('push');
		}

		/**
   * Appends each element to the end of the list.
   *
   * @param {...E} elements - The elements to be appended to the list.
   * @return {List} Returns this list
   *
   * @example
   * // If using ES 5 pushAll() must be called using individual arguments:
   * list.pushAll(1,2,3,4,5);
   *
   * @example
   * // If however you are using ES 2015 pushAll() can be called in the following ways:
   * list.pushAll(1,2,3,4,5);
   * list.pushAll(...[1,2,3,4,5]);
   */
	}, {
		key: "pushAll",
		value: function pushAll() {
			throw new _exceptions.UnimplementedError('push');
		}

		/**
   * Returns the first element in the list.
   *
   * @throws {EmptyCollectionError} If no elements are contained within the list.
   *
   * @return {E} The first element in the list.
   */
	}, {
		key: "shift",
		value: function shift() {
			throw new _exceptions.UnimplementedError('shift');
		}

		/**
   * Prepends element to the front of the list.
   *
   * @param {E} element - The element to be appended to the list.
   * @return {List} Returns this list.
   */
	}, {
		key: "unshift",
		value: function unshift(element) {
			throw new _exceptions.UnimplementedError('unsift');
		}

		/**
  * Prepends each element to the front of the list.
  *
  * @param {...E} elements - The elements to be prepended to the list.
  * @return {List} Returns this list
  *
  * @example
  * // If using ES 5 unshiftAll() must be called using individual arguments:
  * list.unshiftAll(1,2,3,4,5);
  *
  * @example
  * // If however you are using ES 2015 unshiftAll() can be called in the following ways:
  * list.unshiftAll(1,2,3,4,5);
  * list.unshiftAll(...[1,2,3,4,5]);
  */
	}, {
		key: "unshiftAll",
		value: function unshiftAll() {
			throw new _exceptions.UnimplementedError('unsift');
		}
	}]);

	return List;
})(_collectionInterface2["default"]);

exports["default"] = List;
module.exports = exports["default"];