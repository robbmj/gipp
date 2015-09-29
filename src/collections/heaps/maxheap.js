
import __HEAPSYMBOLS from './private/__heapsymbols';
import Collection from './../collection.interface';
import BinaryHeap from './binaryheap.interface';

export default ((heap, cmpf) => {

	class MaxHeap extends BinaryHeap {
		/**
		 * Creates an empty Binary MaxHeap
		 *
		 * @param {CmpFtn} - Redoc for min and max heap cmp functions
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

		toString() {
			return 'Max' + super.toString();
		}
	}

	return MaxHeap;

})(__HEAPSYMBOLS.HEAP, __HEAPSYMBOLS.CMPF);
