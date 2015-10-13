
import {IllegalArgumentError} from "./../../exceptions";

const BinaryNode = (() => {

	const parent = Symbol('parent');
	const left = Symbol('left');
	const right = Symbol('right');
	const elem = Symbol('elem');

	return class BinaryNode {
		constructor(element) {
			this[elem] = element;
			this[left] = null;
			this[right] = null;
			this[parent] = null;
		}

		get parent() {
			return this[parent];
		}

		set parent(parentNode) {
			this[parent] = parentNode;
		}

		get element() {
			return this[elem];
		}

		set element(element) {
			this[elem] = element;
		}

		get left() {
			return this[left];
		}

		set left(leftChild) {
			this[left] = leftChild;
		}

		get right() {
			return this[right];
		}

		set right(rightChild) {
			this[right] = rightChild;
		}

		isLeaf() {
			return this[left] === null && this[right] === null;
		}

		hasOneChild() {
			return this[left] === null ^ this[right] === null;
		}

		getSingleChild() {
			if (this.hasOneChild()) {
				return this[left] === null ? this[right] : this[left];
			}
			return null;
		}
	};
}());

const AVLNode = (() => {

	const balance = Symbol('balance');
	const height = Symbol('height');

	return class AVLNode extends BinaryNode {
		constructor(element) {
			super(element);
			this[balance] = 0;
			this[height] = 0;
		}

		get balance() {
			return this[balance];
		}

		get height() {
			return this[height];
		}

		updateBalance() {
			const left = this.left;
			const right = this.right;

			let leftHeight = 0, rightHeight = 0;

			if (left !== null) {
				leftHeight = 1 + left.height;
			}
			if (right !== null) {
				rightHeight = 1 + right.height;
			}

			if (leftHeight === 0 && rightHeight === 0) {
				this[height] = 0;
			}
			else if (leftHeight === 0) {
				this[height] = rightHeight;
			}
			else if (rightHeight === 0) {
				this[height] = leftHeight;
			}
			else {
				this[height] = Math.max(leftHeight, rightHeight);
			}

			const bal = rightHeight - leftHeight;

			//console.log(`Value: ${this.element}, LeftHeight: ${leftHeight}, RightHeight: ${rightHeight}, Balance: ${bal}`);

			if (bal < -1) {
				this[balance] = -2;
			}
			else if (bal > 1) {
				this[balance] = 2;
			}
			else {
				this[balance] = bal;
			}
		}
	};
}());

const RBNode = (() => {

	const isBlack = Symbol('balance');
	const blackHeight = Symbol('blackHeight');

	return class RBNode extends BinaryNode {
		constructor(element) {
			super(element);
			this[isBlack] = RBNode.RED;
		}

		static get RED() {
			return false;
		}

		static get BLACK() {
			return true;
		}

		isBlack() {
			return this[isBlack];
		}

		get color() {
			return this[isBlack];
		}

		set color(color) {
			if (typeof color !== 'boolean') {
				throw new IllegalArgumentError();
			}
			this[isBlack] = color;
		}

		toggleColor() {
			this[isBlack] = !this[isBlack];
			return this[isBlack];
		}

		blackHeight() {
			if (this.isLeaf) {
				return 1;
			}

			let count = 0,
				// don't count the root node.
				cur = this.left !== null ? this.left : this.right;

			while (cur !== null) {
				if (cur.isBlack()) {
					count += 1;
				}
				cur = cur.left !== null ? cur.left : cur.right
			}
			return count;
		}
	};
}());

export default {"AVLNode": AVLNode, "RBNode": RBNode};
