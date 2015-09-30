
import __HEAPSYMBOLS from './private/__heapsymbols';
import Collection from './../collection.interface';
import BinaryHeap from './binaryheap.interface';

export default ((heap, cmpf) => {

	/**
	 * @classdesc - A Binary MinHeap has the following properties:
	 *  1. Elements are added at the left most null subtree
	 *  2. All child elements are larger than their parent elements
	 *
	 * @arguments BinaryHeap
	 */
	class MinHeap extends BinaryHeap {
		/**
		 * Creates an empty Binary MinHeap
		 *
		 * @param {CmpFtn?} - If no comparison function is passed then the [default comparison function]{@link Collection#cmpFtn} is used.
		 */
		constructor(cmpFtn=null) {
			super(cmpFtn || Collection.cmpFtn);
		}

		map(cb) {
			super._throwIfNotFunction(cb);
			const newHeap = new MinHeap(this[cmpf]);
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
		 * Returns and removes the smallest element in the heap
		 *
		 * @return {E}
		 */
		min() {
			return super.shift();
		}

		toString() {
			return 'Min' + super.toString();
		}
	}

	return MinHeap;

})(__HEAPSYMBOLS.HEAP, __HEAPSYMBOLS.CMPF);
