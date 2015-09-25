
const BinaryNode = (() => {

	const left = Symbol('left');
	const right = Symbol('right');
	const elem = Symbol('elem');

	return class BinaryNode {
		constructor(element) {
			this[elem] = element;
			this[left] = null;
			this[right] = null;
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
	};
}());

const AVLNode = (() => {

	const parent = Symbol('parent');
	const balance = Symbol('balance');
	const height = Symbol('height');

	return class AVLNode extends BinaryNode {
		constructor(element) {
			super(element);
			this[parent] = null;
			this[balance] = 0;
			this[height] = 0;
		}

		get parent() {
			return this[parent];
		}

		set parent(parentNode) {
			this[parent] = parentNode;
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

			if (bal < -1) {
				this[balance] = -1;
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

export default {"AVLNode": AVLNode};
