

import DoubleLinkedList from './../lists/doublelinkedlist';
import Collection from "./../collection.interface";
import Queue from './queue.interface';

import {EmptyCollectionError} from "./../exceptions";
import {IllegalArgumentError} from "./../exceptions";

const ListQueue = (() => {

	const list = Symbol('list');
	const cmpf = Symbol('cmpf');
	const cap = Symbol('cap');

	/**
	 * @implements {Queue}
	 * @since 0.1.0
	 * @classdesc
	 * A ListQueue is a First In First Out (FIFO) data structure
 	 *
 	 * Elements are `enqueued()` to the tail of the queue.
 	 *
 	 * Elemetns are `dequeued()` from the head of the queue.
 	 *
 	 * - `add, enqueue, dequeue, peek, poll, size and isEmpty` have `O(1)` time complexity.
 	 * - `addAll and enqueueAll` have time complexities of `O(N)` where `N` is the size of the argument.
 	 * - `contains delete, *[Symbol.iterator], forEach, map and toString`
 	 *    have time complexities of `O(N)` where `N` is the size of the queue.
	 */
	class ListQueue extends Queue {
		/**
		 * Creates an empty queue
		 *
		 * @param {CmpFtn?} - If no comparison function is passed then the [default comparison function]{@link Collection#cmpFtn} is used.
		 */
		constructor(cmpFtn=null) {
			super();
			this[cmpf] = this[cmpf] = cmpFtn || Collection.cmpFtn;
			this[list] = new DoubleLinkedList(this[cmpf]);
			this[cap] = Number.POSITIVE_INFINITY;
		}

		get capacity() {
			return this[cap];
		}

		set capacity(capacity) {
			if (capacity <= 0) {
				throw new IllegalArgumentError('capacity must be strictly grater than 0');
			}
			this[cap] = capacity;
			while (this[list].size > this[cap]) {
				this[list].shift();
			}
		}

		get size() {
			return this[list].size;
		}

		get isEmpty() {
			return this[list].isEmpty;
		}

		*[Symbol.iterator]() {
			yield * this[list];
		}

		add(element) {
			if (this[list].size === this[cap]) {
				this[list].shift();
			}
			this[list].add(element);
			return this;
		}

		addAll(...elements) {
			for (let e of elements) {
				this.add(e);
			}
			return this;
		}

		contains(element) {
			return this[list].contains(element);
		}

		delete(element) {
			if (this.isEmpty) {
				throw new EmptyCollectionError('Can\'t delete() from an empty queue');
			}
			return this[list].delete(element);
		}

		dequeue() {
			if (this.isEmpty) {
				throw new EmptyCollectionError('Can\'t delete() from an empty queue');
			}
			return this[list].shift();
		}

		enqueue(element) {
			return this.add(element);
		}

		enqueueAll(...elements) {
			return this.addAll(...elements);
		}

		forEach(cb) {
			this[list].forEach(cb);
		}

		map(cb) {
			let newList = this[list].map(cb);
			let newQueue = new ListQueue();
			newQueue[list] = newList;
			return newQueue;
		}

		peek() {
			for (let e of this[list]) {
				return e;
			}
			throw new EmptyCollectionError('Can\'t peek() on an empty queue');
		}

		poll() {
			if (this.isEmpty) {
				throw new EmptyCollectionError('Can\'t poll() from an empty queue');
			}
			return this[list].poll();;
		}

		toString() {
			let s = 'ListQueue: [';
			if (this.isEmpty) {
				return s + ']';
			}
			for (let e of this[list]) {
				s += `${e}, `;
			}
			return s.substring(0, s.length - 2) + ']';
		}
	}

	return ListQueue;
})();

export default ListQueue;
