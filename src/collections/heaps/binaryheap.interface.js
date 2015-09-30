
import Collection from './../collection.interface';
import ListQueue from './../queues/listqueue';

import __HEAPSYMBOLS from './private/__heapsymbols';

export default ((size, heap, cmpf) => {

	const DEFAULT_CAPACITY = 32;

	const PrivateMethods = class {
		constructor(heap) {
			this.heap = heap;
		}

		parent(index) {
			return ((index - 1) / 2) | 0;
		}

		leftChild(index) {
			return (index * 2) + 1;
		}

		rightChild(index) {
			return (index * 2) + 2;
		}

		heapUp(index) {
			if (index === 0) {
				return;
			}

			let parent = this.parent(index);

			while (index > 0
				&& this.heap[cmpf](this.heap[heap][index], this.heap[heap][parent]) < 0) {

				this.swap(index, parent);
				index = parent;
				parent = this.parent(parent);
			}
		}

		// TODO: rewrite iteritively and cleaner
		heapDown(index) {

			const leftIndex = this.leftChild(index);
			const rightIndex = this.rightChild(index);

			// if the child index is NOT within the range of the size
			// of the heap, then it does not exist
			const leftExists = this.indexExists(leftIndex);
			const rightExists = this.indexExists(rightIndex);

			// there is nothing to do if index is a leaf
			if (!leftExists && !rightExists) {
				return;
			}

			let swapOn;

			// find the candidate node to swap on
			if (leftExists && !rightExists) {
				swapOn = leftIndex;
			}
			else if (!leftExists && rightExists) {
				swapOn = rightIndex;
			}
			else {
				// index has two children
				// get the index that has the higher natural ordering
				const leftValue = this.heap[heap][leftIndex];
				const rightValue = this.heap[heap][rightIndex];
				const cmp = this.heap[cmpf](leftValue, rightValue);

				if (cmp < 0) {
					swapOn = leftIndex;
				}
				else {
					swapOn = rightIndex;
				}
			}

			// test to see if we need to swap
			const curValue = this.heap[heap][index];
			const childValue = this.heap[heap][swapOn];
			const cmp = this.heap[cmpf](curValue, childValue);

			if (cmp > 0) {
				this.swap(index, swapOn);
				this.heapDown(swapOn);
			}
			// the algorithum ends if no swap occures
		}

		indexExists(index) {
			return index < this.heap.size;
		}

		swap(from, to) {
			[this.heap[heap][from], this.heap[heap][to]] = [this.heap[heap][to] , this.heap[heap][from]];
		}

		reclaim() {
			const capacity = Math.max(DEFAULT_CAPACITY, this.heap.size * 2);
			this.heap[heap].splice(capacity);
		}

		shouldReclaim() {
			const size = this.heap.size;
			// the array must have a minimum length of DEFAULT_CAPACITY
			return this.capacity > DEFAULT_CAPACITY &&
					// if the length of the array is 4 times greater than the
					// actual number of elements in the heap
					(this.capacity) > size * 4;
		}

		reclaimIfNeeded() {
			if (this.shouldReclaim()) {
				this.reclaim();
			}
		}

		get capacity() {
			return this.heap[heap].length;
		}
	};

	const helper = Symbol('helper');

	/**
	 * The parent interface for all Gipp Binary Heaps
	 * @interface
	 * @augments Collection
	 */
	class BinaryHeap extends Collection {
		/**
		 * Creates an empty Binary Heap
		 *
		 * @throws {UnimplementedError} If directly instantiated.
		 *
		 * @param {CmpFtn} - Redoc for min and max heap cmp functions
		 */
		constructor(cmpFtn) {
			super();
			if (this.constructor.name === 'BinaryHeap') {
				throw new UnimplementedError('BinaryHeap');
			}
			this[size] = 0;
			this[heap] = new Array(DEFAULT_CAPACITY);
			this[cmpf] = cmpFtn;
			this[helper] = new PrivateMethods(this);
		}

		get size() {
			return this[size];
		}

		get isEmpty() {
			return this[size] === 0;
		}

		*[Symbol.iterator]() {
			for (let i = 0; i < this.size; i++) {
				yield this[heap][i];
			}
		}

		add(element) {
			this[heap][this[size]] = element;
			this[size] += 1;
			this[helper].heapUp(this[size]-1);
			return this;
		}

		addAll(...elements) {
			for (let e of elements) {
				this.add(e);
			}
			return this;
		}

		delete(element) {
			let index = 0;
			for (let e of this) {
				if (this[cmpf](e, element) === 0) {
					break;
				}
				index++;
			}
			if (!this[helper].indexExists(index)) {
				return false;
			}

			this[helper].swap(index, this[size]-1);
			this[size] -= 1;
			this[helper].heapDown(index);

			this[helper].reclaimIfNeeded();

			return true;
		}

		contains(element) {
			for (let e of this[heap]) {
				if (this[cmpf](e, element) === 0) {
					return true;
				}
			}
			return false;
		}

		forEach(cb) {
			super._throwIfNotFunction(cb);
			for (let e of this) {
				cb(e);
			}
		}

		/**
		 * The length from the root of the tree to furthest leaf
		 *
		 * @return {number}
		 */
		height() {
			const log2Nodes = Math.log(this[size]) * Math.LOG2E;
			return (log2Nodes + 1) | 0;
		}

		/**
		 * Returns but does not remove the root of the heap
		 *
		 * @return {E}
		 */
		peek() {
			return this[heap][0];
		}

		/**
		 * Returns and removes the root of the heap.
		 *
		 * @return {E}
		 */
		shift() {
			const ret = this.peek();
			this.delete(ret);
			return ret;
		}

		/**
 		 * Returns a string represention of the heap.
 		 *
 		 * @example
 		 * //		5
 		 * //	1 		4
 		 * //0     -1 2		3
 		 *
 		 * heap.toString(); // |5|1,4|0,-1,2,3|
 		 *
 		 * @return {string} A string representation of the heap
 		 */
		toString() {

			function isPowerOf2(n) {
				return (n & (n - 1)) === 0;
			}

			let str = 'Heap: {';

			if (this.isEmpty) {
				return str + '}';
			}
			else {
				str += '|' + this[heap][0] + '|';
			}

			let i = 0;
			for (let e of this) {

				if (i++ < 1) {
					continue;
				}

				if (isPowerOf2(i)) {
					str = str.substring(0, str.length-1);
					str += `|${e},`;
				}
				else {
					str += `${e},`;
				}
			}

			return str.substring(0, str.length - 1) + '|}';
		}
	}

	return BinaryHeap;

})(__HEAPSYMBOLS.SIZE, __HEAPSYMBOLS.HEAP, __HEAPSYMBOLS.CMPF);
