
import __HEAPSYMBOLS from './private/__heapsymbols';
import Collection from './../collection.interface';
import BinaryHeap from './binaryheap.interface';

export default ((heap, cmpf) => {

	/**
	 * @classdesc - A Binary MaxHeap has the following properties:
	 *  1. Elements are added at the left most null subtree
	 *  2. All child elements are smaller than their parent elements
	 *
	 * @since 0.1.0
	 * @arguments BinaryHeap
	 */
	class MaxHeap extends BinaryHeap {
		/**
		 * Creates an empty Binary MaxHeap
		 *
		 * The comparison function used for a MaxHeap should negate the return of a traditional comparison function.
		 * @example
		 * let cmp = (a,b) => a-b;
		 * let reverseCmp = (a,b) => -(cmp(a,b));
		 *
		 * @param {CmpFtn?} - If no comparison function is passed then the [default comparison function]{@link Collection#cmpFtn} is used.
		 */
		constructor(cmpFtn=null) {
			let tempCmpFtn;
			if (typeof cmpFtn === 'function') {
				tempCmpFtn = cmpFtn;
			}
			else {
				tempCmpFtn = (a,b) => -(Collection.cmpFtn(a,b));
			}
			super(tempCmpFtn);
		}

		map(cb) {
			super._throwIfNotFunction(cb);
			const newHeap = new MaxHeap(this[cmpf]);
			// breadth first traversal of the heap should cause
			// no swaps to occur when adding the elements to the new
			// heap
			for (let e of this) {
				if (cb(e)) {
					newHeap.add(e);
				}
			}
			return newHeap;
		}

		/**
		 * Returns and removes the largest element in the heap.
		 *
	 	 * @since 0.1.0
		 * @return {E}
		 */
		max() {
			return super.shift();
		}

		toString() {
			return 'Max' + super.toString();
		}
	}

	return MaxHeap;

})(__HEAPSYMBOLS.HEAP, __HEAPSYMBOLS.CMPF);
