
import {UnimplementedError} from "./exceptions";

export default class ICollection {

	/**
	 * Appends element to the end of the collection
	 *
	 * @param {*} element - the element to be appended to the collection
	 * @return {ICollection} - returns this collection
	 */
	add(element) {
		throw new UnimplementedError('add');
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
	addAll(...elements) {
		throw new UnimplementedError('addAll');
	}

	/**
	 * Searches the collection for element
	 *
	 * @param {*} element - the element to search for
	 * @return {boolean} - true if element is contained in the collection false otherwise
	 */
	contains(element) {
		throw new UnimplementedError('contains');
	}

	/**
	 * Removes the first element in the collection that has a value === element
	 *
	 * Throws an EmptyCollectionError if the collection is empty
	 *
	 * @param {*} element - the element to be removed from the collection
	 * @return {boolean} - true if element was removed from the collection false otherwise
	 */
	delete(element) {
		throw new UnimplementedError('delete');
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
	forEach(cb) {
		throw new UnimplementedError('forEach');
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
	map(cb) {
		throw new UnimplementedError('map');
	}

 	/**
	 * Returns the number of elements contained in the collection
	 *
	 * @return {number} - the number of elements contained in the collection
	 */
	get size() {
		throw new UnimplementedError('get size');
	}

	_throwIfNotFunction(cb) {
		if (typeof cb !== 'function') {
			throw new TypeError((typeof cb) + ' is not a function');
		}
	}
}
