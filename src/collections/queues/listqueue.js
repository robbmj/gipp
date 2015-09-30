
import DoubleLinkedList from './../lists/doublelinkedlist';
import Queue from './queue.interface';
import {EmptyCollectionError} from "./../exceptions";
import {IllegalArgumentError} from "./../exceptions";

const ListQueue = (() => {

	const list = Symbol('list');
	const cap = Symbol('cap');

	/**
	 * @implements {Queue}
	 */
	class ListQueue extends Queue {
		/**
		 * Creates an empty queue
		 *
		 * @param {CmpFtn?} - If no comparison function is passed then the [default comparison function]{@link Collection#cmpFtn} is used.
		 */
		constructor(cmpFtn=null) {
			super();
			/**
			 * @private
			 *
			 * This queue is implmented with a doubly linked list.
			 */
			this[list] = new DoubleLinkedList(cmpFtn);
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
				throw new EmptyCollectionError('Can\'t pop() from an empty queue');
			}
			const ret = this[list].pop();
			this[list].add(ret);
			return ret;
		}
	}

	return ListQueue;
})();

export default ListQueue;
