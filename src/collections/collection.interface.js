
import {UnimplementedError} from "./exceptions";

/**
 * The parent interface for all Gipp collections.
 *
 * A Collection in Gipp should be homogeneous, however it is not required.
 *
 * If a collection contains non primitive elements then a [comparison function]{@link CmpFtn} must be provided
 * to the collection's constructor.
 *
 *
 *
 *
 * @interface
 */
class Collection {

	/**
	 * The generic type `E` represents a value that can be contained in a collection.
	 * If `E` is a non primitive type, then a [comparison function]{@link CmpFtn} must be provided to the
	 * the collection's constructor.
	 *
	 * Gipp will not inforce that a collection be homogeneous. But it is probably a good idea.
	 *
	 * @typedef {*} E
 	 */

 	/**
	 * This callback type is used when searching a collection for an element.
	 *
	 * @callback SeachCallback
	 * @param {E} element - An element contained within the collection.
	 * @return {boolean} True if `element` is the element being searched for, false otherwise
	 */

	/**
	 * A Collection Iterator will visit each element E in a collection.
	 * The order in which elements are visited is determined on the method
	 * returning the iterator.
	 *
	 * This feature is available in ES 2015 only.
	 *
	 * @example
	 * collection.addAll(1,2,3,4,5);
	 * for (let e of collection) {
	 * 	// do something with e
	 * }
	 *
	 * @typedef {generator} CollectionGenerator
	 */

	/**
	 * A comparison function is used to determine the ordering of a collection
	 * and to test for equality between elements in a collection.
	 *
	 * @callback CmpFtn
	 * @param {E} a - An element contained within the collection.
	 * @param {E} b - An element contained within the collection.
	 * @return {number}
	 *	**-1** if `a` is less than `b`<br />
	 *	**1** if `a` is greater than `b`<br />
	 *	**0** if `a` is equal to `b`.
	 */

	/**
	 * This callback is used to iterate over a collection.
	 *
	 * @callback IteratorCallback
	 * @param {E} element - An element contained within the collection.
	 */

	/**
	 * This callback type that is passed to collection.map() is called `mapCallback`.
	 *
	 * @callback MapCallback
	 * @param {E} element - An element contained within the collection.
	 * @return {boolean} True if the element should be contained in the new collection, false otherwise.
	 */

	/**
	 * @throws {UnimplementedError} If directly instantiated.
	 */
	constructor() {
		if (this.constructor.name === 'IList') {
			throw new UnimplementedError('IList');
		}
	}

	/**
	 * Returns the default [comparison function]{@link CmpFtn}. This function is sutable only for primitive types
	 * and homogeneous arrays of primitive types.
	 *
	 * @return {CmpFtn} The default comparison function.
	 */
	static get cmpFtn() {
		return (a, b) => a - b;
	}

	/**
	 * Tests if the collection is empty
	 *
	 * @return {boolean} True if the collection is empty, false otherwise.
	 */
	get isEmpty() {
		throw new UnimplementedError('get size');
	}

	/**
	 * Returns the number of elements contained in the collection.
	 *
	 * @return {number} the number of elements contained in the collection.
	 */
	get size() {
		throw new UnimplementedError('get size');
	}

	/**
	 * This feature is available in ES 2015 only. For older versions of JavaScript use {@link Collection#forEach}
	 *
	 * @return {CollectionGenerator}
	 */
	*[Symbol.iterator]() {
		throw new UnimplementedError('get size');
	}

	/**
	 * Appends element to the end of the collection.
	 *
	 * @param {E} element - The element to be appended to the collection.
	 * @return {Collection} Returns this collection.
	 */
	add(element) {
		throw new UnimplementedError('add');
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
	addAll(...elements) {
		throw new UnimplementedError('addAll');
	}

	/**
	 * Searches the collection for element.
	 *
	 * @param {E} element - The element to search for.
	 * @return {boolean} True if element is contained in the collection false otherwise.
	 */
	contains(element) {
		throw new UnimplementedError('contains');
	}

	/**
	 * Removes the first element in the collection that has a value === element.
	 *
	 * @throws {EmptyCollectionError} If the collection is empty.
	 *
	 * @param {E} element - The element to be removed from the collection.
	 * @return {boolean} True if element was removed from the collection false otherwise.
	 */
	delete(element) {
		throw new UnimplementedError('delete');
	}

	/**
	 * The forEach() method executes a provided function once per collection element.
	 *
	 * forEach does not garuntee any relationship between the ordering of values being added to the collection
	 * and the order in witch forEach iterates over the collection. It just garuentees to vist each element in the
	 * collection once.
	 *
	 * @throws {TypeError} If cb is not a function.
	 *
	 * @param {IteratorCallback} cb - The callback that will be applied to each element in the collection.
	 * @return {Collection} Returns this collection.
	 */
	forEach(cb) {
		throw new UnimplementedError('forEach');
	}

	/**
	 * The map() method creates a new collection with the results of calling a provided function on every element in this collection.
	 *
	 * @throws {TypeError} If cb is not a function.
	 *
	 * @param {MapCallback} cb - The callback that will be applied to each element in the collection.
	 * @return {Collection} A new collection with the results of calling a provided function on every element in this collection.
	 */
	map(cb) {
		throw new UnimplementedError('map');
	}

	/**
	 * Returns a string representation of the collection.
	 *
	 * @return {String} A string representation of the collection.
	 */
	toString() {
		throw new UnimplementedError('get size');
	}

	/** @private */
	_throwIfNotFunction(cb) {
		if (typeof cb !== 'function') {
			throw new TypeError((typeof cb) + ' is not a function');
		}
	}
}

export default Collection;
