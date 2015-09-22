'use strict';

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _exceptions = require("./exceptions");

var ICollection = (function () {
	function ICollection() {
		_classCallCheck(this, ICollection);
	}

	_createClass(ICollection, [{
		key: 'add',

		/**
   * Appends element to the end of the collection
   *
   * @param {*} element - the element to be appended to the collection
   * @return {ICollection} - returns this collection
   */
		value: function add(element) {
			throw new _exceptions.UnimplementedError('add');
		}

		/**
   * Appends each element to the end of the collection
   *
   * If using ES 5 `addAll` must be called using individual arguments:
   *
   *	`collection.addAll(1,2,3,4,5);`
   *
   * If however you are using ES 2015 `addAll` can be called in the following ways:
   *
   *	`collection.addAll(1,2,3,4,5);` or `collection.addAll(...[1,2,3,4,5]);`
   *
   * @param {...*} elements - the element to be appended to the collection
   * @return {ICollection} - returns this collection
   */
	}, {
		key: 'addAll',
		value: function addAll() {
			throw new _exceptions.UnimplementedError('addAll');
		}

		/**
   * Searches the collection for element
   *
   * @param {*} element - the element to search for
   * @return {boolean} - true if element is contained in the collection false otherwise
   */
	}, {
		key: 'contains',
		value: function contains(element) {
			throw new _exceptions.UnimplementedError('contains');
		}

		/**
   * Removes the first element in the collection that has a value === element
   *
   * Throws an EmptyCollectionError if the collection is empty
   *
   * @param {*} element - the element to be removed from the collection
   * @return {boolean} - true if element was removed from the collection false otherwise
   */
	}, {
		key: 'delete',
		value: function _delete(element) {
			throw new _exceptions.UnimplementedError('delete');
		}

		/**
   * This callback type is called `forEachCallback` and is displayed as a global symbol.
   *
   * @callback forEachCallback
   * @param {*} element - an element contained within the collection
   */

		/**
   * The forEach() method executes a provided function once per collection element.
   *
   * Throws a TypeError if cb is not a function
   *
   * @param {forEachCallback} cb - the callback that will be applied to each element in the collection
   * @return {ICollection} - returns this collection
   */
	}, {
		key: 'forEach',
		value: function forEach(cb) {
			throw new _exceptions.UnimplementedError('forEach');
		}

		/**
   * This callback type is called `mapCallback` and is displayed as a global symbol.
   *
   * @callback mapCallback
   * @param {*} element - an element contained within the collection
   * @return {boolean} - true if the element should be contained in the new collection, false otherwise
   */

		/**
   * The map() method creates a new collection with the results of calling a provided function on every element in this collection.
   *
   * Throws a TypeError if cb is not a function
   *
   * @param {mapCallback} cb - the callback that will be applied to each element in the collection
   * @return {ICollection} -  a new collection with the results of calling a provided function on every element in this collection.
   */
	}, {
		key: 'map',
		value: function map(cb) {
			throw new _exceptions.UnimplementedError('map');
		}

		/**
  * Returns the number of elements contained in the collection
  *
  * @return {number} - the number of elements contained in the collection
  */
	}, {
		key: '_throwIfNotFunction',
		value: function _throwIfNotFunction(cb) {
			if (typeof cb !== 'function') {
				throw new TypeError(typeof cb + ' is not a function');
			}
		}
	}, {
		key: 'size',
		get: function get() {
			throw new _exceptions.UnimplementedError('get size');
		}
	}]);

	return ICollection;
})();

exports['default'] = ICollection;
module.exports = exports['default'];