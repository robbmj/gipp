
import Collection from "./../collection.interface";
import MaxHeap from './../heaps/maxheap';

import Queue from './queue.interface';
import {EmptyCollectionError} from "./../exceptions";
import {IllegalArgumentError} from "./../exceptions";

const PriorityQueue = (() => {

	const _heap = Symbol('heap');
	const _cmpf = Symbol('cmpf');
	const _cap = Symbol('cap');
	const _smallest = Symbol('_smallest');

	function minPriority(candidateSmallest, actualSmallest, cmpFtn) {
		if (actualSmallest === null) {
			return candidateSmallest;
		}
		if (cmpFtn(actualSmallest, candidateSmallest) < 0) {
			return candidateSmallest
		}
		return actualSmallest;
	}

	/**
	 * @classdesc
	 * An optionally bounded priority queue based on a Heap.
	 * The elements of the priority queue are ordered according to [the comparison function]{@link Collection#cmpFtn}
	 * passed the the constructor.
	 *
	 * The `Generator` and `forEach()` methods provided are __not guaranteed__ to traverse the elements of the priority queue in any particular order.
	 *
	 * @since 0.2.0
	 * @implements Queue
	 */
	class PriorityQueue extends Queue {

		/**
		 * Creates an empty priority queue
		 *
		 * @param {CmpFtn?} - If no comparison function is passed then the [default comparison function]{@link Collection#cmpFtn} is used.
		 */
		constructor(cmpFtn=null) {
			super();
			this[_cmpf] = cmpFtn || function (a,b) { return -(Collection.cmpFtn(a,b)); };
			this[_heap] = new MaxHeap(this[_cmpf]);
			this[_cap] = Number.POSITIVE_INFINITY;
			// keeps track of the lowest priority element
			this[_smallest] = null;
		}

		get capacity() {
			return this[_cap];
		}

		set capacity(capacity) {
			if (capacity <= 0) {
				throw new IllegalArgumentError('capacity must be strictly grater than 0');
			}
			this[_cap] = capacity;
			while (this[_heap].size > this[_cap]) {
				this[_heap].shift();
			}
		}

		get size() {
			return this[_heap].size;
		}

		get isEmpty() {
			return this[_heap].isEmpty;
		}

		*[Symbol.iterator]() {
			yield * this[_heap];
		}

		add(element) {
			if (this[_heap].size === this[_cap]) {
				this[_heap].shift();
			}
			this[_heap].add(element);
			this[_smallest] = minPriority(element, this[_smallest], this[_cmpf]);
			return this;
		}

		addAll(...elements) {
			for (let e of elements) {
				this.add(e);
			}
			return this;
		}

		contains(element) {
			return this[_heap].contains(element);
		}

		delete(element) {
			if (this.isEmpty) {
				throw new EmptyCollectionError('Can\'t delete() from an empty PriorityQueue');
			}
			const ret = this[_heap].delete(element);
			if (ret && this.isEmpty) {
				this[_smallest] = null;
			}
			return ret;
		}

		dequeue() {
			if (this.isEmpty) {
				throw new EmptyCollectionError('Can\'t delete() from an empty PriorityQueue');
			}
			const ret = this[_heap].shift();
			if (this.isEmpty) {
				this[_smallest] = null;
			}
			return ret;
		}

		enqueue(element) {
			return this.add(element);
		}

		enqueueAll(...elements) {
			return this.addAll(...elements);
		}

		forEach(cb) {
			this[_heap].forEach(cb);
		}

		map(cb) {
			let newHeap = this[_heap].map(cb);
			let newQueue = new PriorityQueue(this[_cmpf]);
			newQueue[_heap] = newHeap;
			return newHeap;
		}

		peek() {
			if (this.isEmpty) {
				throw new EmptyCollectionError('Can\'t peek() from an empty PriorityQueue');
			}
			return this[_heap].peek();
		}

		poll() {
			if (this.isEmpty) {
				throw new EmptyCollectionError('Can\'t poll() from an empty PriorityQueue');
			}
			return this[_smallest];
		}

		toArray() {
			const a = new Array(this.size);
			for (let e of this) {
				a.push(e);
			}
			return a;
		}

		/**
		 * The string returned does not imply any ordering of the Priority Queue
		 *
		 * @return {string}
		 */
		toString() {
			let s = 'PriorityQueue: [';
			if (this.isEmpty) {
				return s + ']';
			}
			for (let e of this) {
				s += `${e}, `;
			}
			return s.substring(0, s.length - 2) + ']';
		}
	}

	return PriorityQueue;

})();

export default PriorityQueue;
