
import Collection from "./../collection.interface";
import {UnimplementedError} from "./../exceptions";

/**
 * The parent interface for all Gipp Lists
 *
 * @since 0.1.0
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
	 * Returns but does not remove the head of the list.
	 *
	 * @since 0.2.0
	 * @throws {EmptyCollectionError} If the list is empty
	 * @return {E}
	 */
	peek() {
		throw new UnimplementedError('peek');
	}

	/**
	 * Returns but does not remove the tail of the list.
	 *
	 * @since 0.2.0
	 * @throws {EmptyCollectionError} If the list is empty
	 * @return {E}
	 */
	poll() {
		throw new UnimplementedError('poll');
	}

	/**
	 * Returns the tail element of the list.
	 *
	 * @throws {EmptyCollectionError} If no elements are contained within the collection.
	 *
	 * @return {E} The tail of the list.
	 */
	pop() {
		throw new UnimplementedError('pop');
	}

	/**
	 * Appends element to the tail of the list.
	 *
	 * @param {E} element - the element to be appended to the tail of list.
	 * @return {List} Returns this list.
	 */
	push(element) {
		throw new UnimplementedError('push');
	}

	/**
	 * Appends each element to the tail of the list.
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
	 * Returns the head element of the list.
	 *
	 * @throws {EmptyCollectionError} If no elements are contained within the list.
	 *
	 * @return {E} The head element in the list.
	 */
	shift() {
		throw new UnimplementedError('shift');
	}

	/**
	 * Prepends element to the head of the list.
	 *
	 * @param {E} element - The element to be prepended to the list.
	 * @return {List} Returns this list.
	 */
	unshift(element) {
		throw new UnimplementedError('unsift');
	}

	 /**
	 * Prepends each element to the head of the list.
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
	 *
	 * @example
	 * // unshiftAll() prepends elements to the head of the list in the reverse order of the arguments
	 * list.unshiftAll(1,2,3,4,5);
	 * list.toString() // [1 -> 2 -> 3 -> 4 -> 5]
	 */
	unshiftAll(...elements) {
		throw new UnimplementedError('unsift');
	}
}

export default List;
