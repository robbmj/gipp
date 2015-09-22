
import ICollection from "./../collection.interface";
import {UnimplementedError} from "./../exceptions";

export default class IList extends ICollection {


	/**
	 * The indexOf() method returns the first index at which a given element can be found in the list, or -1 if it is not present.
	 *
	 * @param {*} element - element to locate in the list.
	 * @return {number} - the first index at which a given element can be found in the list, or -1 if it is not present.
	 */
	indexOf(element) {
		throw new UnimplementedError('indexOf');
	}

	/**
	 * The lastIndexOf() method returns the last index at which a given element can be found in the list, or -1 if it is not present.
	 *
	 * @param {*} element - element to locate in the list.
	 * @return {number} - the last index at which a given element can be found in the list, or -1 if it is not present.
	 */
	lastIndexOf(element) {
		throw new UnimplementedError('lastIndexOf');
	}

	/**
	 * Returns the last element in the list
	 *
	 * Throws an EmptyCollectionError if no elements are contained within the collection
	 *
	 * @return {*} - the last element in the list
	 */
	pop() {
		throw new UnimplementedError('pop');
	}

	/**
	 * Appends element to the end of the list
	 *
	 * @param {*} element - the element to be appended to the list
	 * @return {IList} - returns this list
	 */
	push(element) {
		throw new UnimplementedError('push');
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
	pushAll(...elements) {
		throw new UnimplementedError('push');
	}

	/**
	 * Returns the first element in the list
	 *
	 * Throws an EmptyCollectionError if no elements are contained within the collection
	 *
	 * @return {*} - the first element in the list
	 */
	shift() {
		throw new UnimplementedError('shift');
	}

	/**
	 * Prepends element to the front of the list
	 *
	 * @param {*} element - the element to be appended to the list
	 * @return {IList} - returns this list
	 */
	unshift(element) {
		throw new UnimplementedError('unsift');
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
	unshiftAll(...elements) {
		throw new UnimplementedError('unsift');
	}
}
