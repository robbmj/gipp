
import Collection from "./../collection.interface";
import {UnimplementedError} from "./../exceptions";

/**
 * The parent interface for all Gipp Lists
 * @interface
 * @augments Collection
 */
class List extends Collection {

	/**
	 * @throws {UnimplementedError} If directly instantiated.
	 */
	constructor() {
		super();
		if (this.constructor.name === 'List') {
			throw new UnimplementedError('List');
		}
	}

	/**
	 * The indexOf() method returns the first index at which a given element can be found in the list, or -1 if it is not present.
	 *
	 * @param {E} element - The element to locate in the list.
	 * @return {number} The first index at which a given element can be found in the list, or -1 if it is not present.
	 */
	indexOf(element) {
		throw new UnimplementedError('indexOf');
	}

	/**
	 * The lastIndexOf() method returns the last index at which a given element can be found in the list, or -1 if it is not present.
	 *
	 * @param {E} element - The element to locate in the list.
	 * @return {number} The last index at which a given element can be found in the list, or -1 if it is not present.
	 */
	lastIndexOf(element) {
		throw new UnimplementedError('lastIndexOf');
	}

	/**
	 * Returns the last element in the list.
	 *
	 * @throws {EmptyCollectionError} If no elements are contained within the collection.
	 *
	 * @return {E} The last element in the list.
	 */
	pop() {
		throw new UnimplementedError('pop');
	}

	/**
	 * Appends element to the end of the list.
	 *
	 * @param {E} element - the element to be appended to the list.
	 * @return {List} Returns this list.
	 */
	push(element) {
		throw new UnimplementedError('push');
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
	pushAll(...elements) {
		throw new UnimplementedError('push');
	}

	/**
	 * Returns the first element in the list.
	 *
	 * @throws {EmptyCollectionError} If no elements are contained within the list.
	 *
	 * @return {E} The first element in the list.
	 */
	shift() {
		throw new UnimplementedError('shift');
	}

	/**
	 * Prepends element to the front of the list.
	 *
	 * @param {E} element - The element to be appended to the list.
	 * @return {List} Returns this list.
	 */
	unshift(element) {
		throw new UnimplementedError('unsift');
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
	unshiftAll(...elements) {
		throw new UnimplementedError('unsift');
	}
}

export default List;
