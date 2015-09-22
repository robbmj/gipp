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

var IList = (function (_ICollection) {
	_inherits(IList, _ICollection);

	function IList() {
		_classCallCheck(this, IList);

		_get(Object.getPrototypeOf(IList.prototype), "constructor", this).apply(this, arguments);
	}

	_createClass(IList, [{
		key: "indexOf",

		/**
   * The indexOf() method returns the first index at which a given element can be found in the list, or -1 if it is not present.
   *
   * @param {*} element - element to locate in the list.
   * @return {number} - the first index at which a given element can be found in the list, or -1 if it is not present.
   */
		value: function indexOf(element) {
			throw new _exceptions.UnimplementedError('indexOf');
		}

		/**
   * The lastIndexOf() method returns the last index at which a given element can be found in the list, or -1 if it is not present.
   *
   * @param {*} element - element to locate in the list.
   * @return {number} - the last index at which a given element can be found in the list, or -1 if it is not present.
   */
	}, {
		key: "lastIndexOf",
		value: function lastIndexOf(element) {
			throw new _exceptions.UnimplementedError('lastIndexOf');
		}

		/**
   * Returns the last element in the list
   *
   * Throws an EmptyCollectionError if no elements are contained within the collection
   *
   * @return {*} - the last element in the list
   */
	}, {
		key: "pop",
		value: function pop() {
			throw new _exceptions.UnimplementedError('pop');
		}

		/**
   * Appends element to the end of the list
   *
   * @param {*} element - the element to be appended to the list
   * @return {IList} - returns this list
   */
	}, {
		key: "push",
		value: function push(element) {
			throw new _exceptions.UnimplementedError('push');
		}

		/**
   * Appends each element to the end of the collection
   *
   * If using ES 5 `pushAll` must be called using individual arguments:
   *
   *	`collection.pushAll(1,2,3,4,5);`
   *
   * If however you are using ES 2015 `pushAll` can be called in the following ways:
   *
   *	`collection.pushAll(1,2,3,4,5);` or `collection.pushAll(...[1,2,3,4,5]);`
   *
   * @param {...*} elements - the element to be appended to the collection
   * @return {ICollection} - returns this collection
   */
	}, {
		key: "pushAll",
		value: function pushAll() {
			throw new _exceptions.UnimplementedError('push');
		}

		/**
   * Returns the first element in the list
   *
   * Throws an EmptyCollectionError if no elements are contained within the collection
   *
   * @return {*} - the first element in the list
   */
	}, {
		key: "shift",
		value: function shift() {
			throw new _exceptions.UnimplementedError('shift');
		}

		/**
   * Prepends element to the front of the list
   *
   * @param {*} element - the element to be appended to the list
   * @return {IList} - returns this list
   */
	}, {
		key: "unshift",
		value: function unshift(element) {
			throw new _exceptions.UnimplementedError('unsift');
		}

		/**
   * Prepends each element to the front of the list
   *
   * If using ES 5 `unshiftAll` must be called using individual arguments:
   *
   *	`collection.unshiftAll(1,2,3,4,5);`
   *
   * If however you are using ES 2015 `unshiftAll` can be called in the following ways:
   *
   *	`collection.unshiftAll(1,2,3,4,5);` or `collection.unshiftAll(...[1,2,3,4,5]);`
   *
   * @param {...*} elements - the element to be appended to the collection
   * @return {ICollection} - returns this collection
   */
	}, {
		key: "unshiftAll",
		value: function unshiftAll() {
			throw new _exceptions.UnimplementedError('unsift');
		}
	}]);

	return IList;
})(_collectionInterface2["default"]);

exports["default"] = IList;
module.exports = exports["default"];