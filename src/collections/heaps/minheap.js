
import __HEAPSYMBOLS from './private/__heapsymbols';
import Collection from './../collection.interface';
import BinaryHeap from './binaryheap.interface';

export default ((heap, cmpf) => {

	class MinHeap extends BinaryHeap {
		/**
		 * Creates an empty Binary MinHeap
		 *
		 * @param {CmpFtn} - Redoc for min and max heap cmp functions
		 */
		constructor(cmpFtn=null) {
			super(cmpFtn || Collection.cmpFtn);
		}

		toString() {
			return 'Min' + super.toString();
		}
	}

	return MinHeap;

})(__HEAPSYMBOLS.HEAP, __HEAPSYMBOLS.CMPF);
