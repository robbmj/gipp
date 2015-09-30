
import BinaryTree from './binarytree.interface';
import __BINARYTREESYMBOLS from './private/__binarytreesymbols';

import {UnimplementedError} from "./../exceptions";

export default ((size, root, cmpf) => {

	/**
	 * @classdesc RBTree
	 * @implements {BinaryTree}
	 */
	class RBTree extends BinaryTree {
		/**
		 * Creates an empty Red Black Tree
		 *
		 * @param {CmpFtn?} - If no comparison function is passed then the [default comparison function]{@link Collection#cmpFtn} is used.
		 */
		constructor(cmpFtn=null) {
			super(cmpFtn);
			throw new UnimplementedError();
		}

		add(element) {
			// TODO
			return this;
		}

		addAll(...elements) {
			for (let e of elements) {
				this.add(e);
			}
			// TODO
			return this;
		}

		delete(element) {
			if (this[size] === 0) {
				throw new EmptyCollectionError('Can\'t delete from an empty RBTree');
			}
			// TODO
			return false;
		}

		map(cb) {
			super._throwIfNotFunction(cb);
			let newTree = new RBTree(this[cmpf]);
			// TODO
			return newTree;
		}
	}

	return RBTree;

})(__BINARYTREESYMBOLS.SIZE, __BINARYTREESYMBOLS.ROOT, __BINARYTREESYMBOLS.CMPF);
