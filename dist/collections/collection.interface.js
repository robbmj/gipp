'use strict';

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _Symbol$iterator = require('babel-runtime/core-js/symbol/iterator')['default'];

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _exceptions = require("./exceptions");

/**
 * The parent interface for all Gip collections.
 *
 * A Collection in Gip should be homogeneous, however it is not required.
 *
 * If a collection contains non primitive elements then a [comparison function]{@link cmpFtn} must be provided
 * to the collection's constructor.
 *
 *
 *
 *
 * @interface
 */

var Collection = (function () {

	/**
  * The generic type `E` represents a value that can be contained in a collection.
  * If `E` is a non primitive type, then a [comparison function]{@link cmpFtn} must be provided to the
  * the collection's constructor.
  *
  * Gip will not inforce that a collection be homogeneous. But it is probably a good idea.
  *
  * @typedef {*} E
 	 */

	/**
  * A comparison function is used to determine the ordering of a collection
  * and to test for equality between elements in a collection.
  *
  * @callback cmpFtn
  * @param {E} a - An element contained within the collection.
  * @param {E} b - An element contained within the collection.
  * @return {number}
  *	**-1** if `a` is less than `b`<br />
  *	**1** if `a` is greater than `b`<br />
  *	**0** if `a` is equal to `b`.
  */

	/**
  * @throws {UnimplementedError} If directly instantiated.
  */

	function Collection() {
		_classCallCheck(this, Collection);

		if (this.constructor.name === 'IList') {
			throw new _exceptions.UnimplementedError('IList');
		}
	}

	/**
  * Returns the default [comparison function]{@link cmpFtn}. This function is sutable only for primitive types
  * and homogeneous arrays of primitive types.
  *
  * @return {cmpFtn} The default comparison function.
  */

	_createClass(Collection, [{
		key: _Symbol$iterator,

		/**
   * This feature is available in ES 2015 only. For older versions of JavaScript use {@link Collection#forEach}
   *
   * @example
   * collection.addAll(1,2,3,4,5);
   * for (let i of collection) {
   * 		// do something with i
   * }
   */
		value: _regeneratorRuntime.mark(function value() {
			return _regeneratorRuntime.wrap(function value$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						throw new _exceptions.UnimplementedError('get size');

					case 1:
					case 'end':
						return context$2$0.stop();
				}
			}, value, this);
		})

		/**
   * Appends element to the end of the collection.
   *
   * @param {E} element - The element to be appended to the collection.
   * @return {Collection} Returns this collection.
   */
	}, {
		key: 'add',
		value: function add(element) {
			throw new _exceptions.UnimplementedError('add');
		}

		/**
   * Appends each element to the end of the collection.
   *
   * @param {...E} elements - The elements to be appended to the collection.
   * @return {Collection} Returns this collection
   *
   * @example
   * // If using ES 5 addAll() must be called using individual arguments:
   * collection.addAll(1,2,3,4,5);
   *
   * @example
   * // If however you are using ES 2015 addAll() can be called in the following ways:
   * collection.addAll(1,2,3,4,5);
   * collection.addAll(...[1,2,3,4,5]);
   *
   */
	}, {
		key: 'addAll',
		value: function addAll() {
			throw new _exceptions.UnimplementedError('addAll');
		}

		/**
   * Searches the collection for element.
   *
   * @param {E} element - The element to search for.
   * @return {boolean} True if element is contained in the collection false otherwise.
   */
	}, {
		key: 'contains',
		value: function contains(element) {
			throw new _exceptions.UnimplementedError('contains');
		}

		/**
   * Removes the first element in the collection that has a value === element.
   *
   * @throws {EmptyCollectionError} If the collection is empty.
   *
   * @param {E} element - The element to be removed from the collection.
   * @return {boolean} True if element was removed from the collection false otherwise.
   */
	}, {
		key: 'delete',
		value: function _delete(element) {
			throw new _exceptions.UnimplementedError('delete');
		}

		/**
   * This callback type that is passed to collection.forEach() is called `forEachCallback`.
   *
   * @callback forEachCallback
   * @param {E} element - An element contained within the collection.
   */

		/**
   * The forEach() method executes a provided function once per collection element.
   *
   * @throws {TypeError} If cb is not a function.
   *
   * @param {forEachCallback} cb - The callback that will be applied to each element in the collection.
   * @return {Collection} Returns this collection.
   */
	}, {
		key: 'forEach',
		value: function forEach(cb) {
			throw new _exceptions.UnimplementedError('forEach');
		}

		/**
   * This callback type that is passed to collection.map() is called `mapCallback`.
   *
   * @callback mapCallback
   * @param {E} element - An element contained within the collection.
   * @return {boolean} True if the element should be contained in the new collection, false otherwise.
   */

		/**
   * The map() method creates a new collection with the results of calling a provided function on every element in this collection.
   *
   * @throws {TypeError} If cb is not a function.
   *
   * @param {mapCallback} cb - The callback that will be applied to each element in the collection.
   * @return {Collection} A new collection with the results of calling a provided function on every element in this collection.
   */
	}, {
		key: 'map',
		value: function map(cb) {
			throw new _exceptions.UnimplementedError('map');
		}

		/**
   * Returns a string representation of the collection.
   *
   * @return {String} A string representation of the collection.
   */
	}, {
		key: 'toString',
		value: function toString() {
			throw new _exceptions.UnimplementedError('get size');
		}
	}, {
		key: '_throwIfNotFunction',
		value: function _throwIfNotFunction(cb) {
			if (typeof cb !== 'function') {
				throw new TypeError(typeof cb + ' is not a function');
			}
		}
	}, {
		key: 'isEmpty',

		/**
   * Tests if the collection is empty
   *
   * @return {boolean} True if the collection is empty, false otherwise.
   */
		get: function get() {
			throw new _exceptions.UnimplementedError('get size');
		}

		/**
   * Returns the number of elements contained in the collection.
   *
   * @return {number} the number of elements contained in the collection.
   */
	}, {
		key: 'size',
		get: function get() {
			throw new _exceptions.UnimplementedError('get size');
		}
	}], [{
		key: 'cmpFtn',
		get: function get() {
			return function (a, b) {
				return a - b;
			};
		}
	}]);

	return Collection;
})();

exports['default'] = Collection;
module.exports = exports['default'];