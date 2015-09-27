
import BinaryTree from './binarytree.interface';

import __BINARYTREESYMBOLS from './private/__binarytreesymbols';
import {AVLNode} from './private/__binarytreenodes';

export default ((size, root, cmpf) => {
	/**
	 * @private
	 * @class
	 * @classdesc PrivateMethods implements the private methods for AVLTree
	 */
	const PrivateMethods = class {

		/**
		 * @param {AVLTree} avltree - grants the PrivateMethods instance access to the AVLTree's private properties
		 */
		constructor(avltree) {
			this.avltree = avltree;
		}

		/**
		 * @private
		 *
		 * Recursivle searches the tree in order to add `nodeToAdd` to the AVLTree
		 *
		 * @param {AVLNode} nodeToAdd - The new node to be added to the collection
		 * @param {AVLNode} curNode - A node already in the collection, it's used to test where the newNode should be added
		 */
		add(nodeToAdd, curNode) {

			while (true) {
				const cmp = this.avltree[cmpf](nodeToAdd.element, curNode.element);

				if (cmp > 0) {
					if (curNode.right === null) {
						curNode.right = nodeToAdd;
						nodeToAdd.parent = curNode;
						break;
					}
					else {
						curNode = curNode.right;
					}
				}
				else {
					if (curNode.left === null) {
						curNode.left = nodeToAdd;
						nodeToAdd.parent = curNode;
						break;
					}
					else {
						curNode = curNode.left;
					}
				}
			}

			// traverse up the ansestor nodes updating balances and rotating as needed.
			while (curNode !== null) {
				curNode.updateBalance();
				this.balance(curNode);
				curNode = curNode.parent;
			}
		}

		delete(element, curNode) {

			while (curNode !== null) {
				const cmp = this.avltree[cmpf](element, curNode.element);
				if (cmp > 0) {
					curNode = curNode.right;
				}
				else if (cmp < 0) {
					curNode = curNode.left
				}
				else {
					break;
				}
			}

			if (curNode === null) {
				return false;
			}

			let startBalanceAt = null;
			if (curNode.isLeaf()) {

				// case 1) If node has no children (i.e., is a leaf), delete node.

				startBalanceAt = this.deleteLeafNode(curNode);
			}
			else if (curNode.hasOneChild()) {

				// case 2) If node has one child,
				// let node' be the child of node.
				// Notice: node' cannot have a child, since subtrees can differ in
				// height by at most one
				// replace the element value of node with the element value of node'
				// delete node' (a leaf)

				startBalanceAt = this.deleteNodeWithSingleChild(curNode);
			}
			else {

				// case 3) If node has two children,
				// find node's successor z (which has no left child)
				// replace node's element with z's element, and -delete z.
				// [since z has at most one child, so we use case (1) or (2) to delete z]

				const leftMostChild = this.inOrderSuccessor(curNode);
				curNode.element = leftMostChild.element;
				if (leftMostChild.isLeaf()) {
					startBalanceAt = this.deleteLeafNode(leftMostChild);
				}
				else {
					startBalanceAt = this.deleteNodeWithSingleChild(leftMostChild);
				}
			}


			// Go from the deleted leaf towards the
  			// root and at each ancestor of that leaf:
  			// update the balance factor
  			// rebalance with rotations if necessary.

			startBalanceAt.updateBalance();
			this.balance(startBalanceAt);

			return true;
		}

		inOrderSuccessor(node) {
			let successor = node.right;
			while (successor.left !== null) {
				successor = successor.left;
			}
			return successor;
		}


		deleteLeafNode(node) {
			if (node.parent.right === node) {
				node.parent.right = null;
			}
			else {
				node.parent.left = null;
			}
			const parent = node.parent;
			node.parent = null;
			return parent;
		}

		deleteNodeWithSingleChild(node) {
			const child = node.getSingleChild();
			node.element = child.element;
			child.parent = null;
			if (node.right === child) {
				node.right = null;
			}
			else {
				node.left = null;
			}
			return node;
		}

		/**
		 * @private
		 *
		 * After each insertion iterate over the parent nodes of just added node and height balance the tree
		 *
		 * @param {AVLNode} curNode - A node that may need a rotation performed on it
		 */
		balance(curNode) {
			while (curNode !== null) {

				const balance = curNode.balance

				//console.log('Balance Factor: ' + balance);

				if (balance > 1) {
					const rightChild = curNode.right;

					if (rightChild !== null && rightChild.balance < 0) {
						//console.log('Left Right Rotation');
						curNode = this.leftRightRotation(rightChild);
					}
					else {
						//console.log('Single Left Rotation');
						curNode = this.leftRotation(curNode);
					}
				}
				else if (balance < -1) {
					const leftChild = curNode.left;

					if (leftChild !== null && leftChild.balance > 0) {
						//console.log('Right Left Rotation');
						curNode = this.rightLeftRotation(leftChild);
					}
					else {
						//console.log('Single Right Rotation');
						curNode = this.rightRotation(curNode);
					}
				}
				else {
					curNode = curNode.parent;
				}
			}
		}

		/**
		 * @private
		 *
		 * Performs a single left rotation on the node by doing the following
	 	 * 1. child becomes the new root.
		 * 2. parent takes ownership of child's left child as its right child
	 	 * 3. child takes ownership of parent as its left child
	 	 * 4. fix the parent pointers as needed
	 	 * 5. update node balances
	 	 *
	 	 * @param {AVLNode} node - The node to perform a single left rotation
	 	 */
		leftRotation(node) {
			const rightChild = node.right;

			// child becomes the new root.
			rightChild.parent = node.parent;
			node.parent = rightChild;

			// parent takes ownership of child's left child as its right child
			node.right = rightChild.left;
			if (node.right !== null) {
				node.right.parent = node;
			}

			// child takes ownership of parent as its left child
			rightChild.left = node;

			if (rightChild.parent !== null) {
				// fix the parent pointers
				if (rightChild.parent.left === node) {
					rightChild.parent.left = rightChild;
				}
				else if (rightChild.parent.right === node) {
					rightChild.parent.right = rightChild;
				}
			}
			else {
				this.avltree[root] = rightChild;
			}

			this.updateBalance(node);
			this.updateBalance(rightChild);

			return rightChild;
		}

		/**
		 * @private
		 *
		 * Performs a single right rotation on the node by doing the following
	 	 * 1. child becomes the new root.
		 * 2. parent takes ownership of childs's right child, as its left child.
	 	 * 3. child takes ownership of parent, as it's right child.
	 	 * 4. fix the parent pointers as needed
	 	 * 5. update node balances
	 	 *
	 	 * @param {AVLNode} node - The node to perform a single right rotation
	 	 */
		rightRotation(node) {
			const leftChild = node.left;

			// child becomes the new root.
			leftChild.parent = node.parent;
			node.parent = leftChild;

			// parent takes ownership of childs's right child, as its left child.
			node.left = leftChild.right;
			if (node.left !== null) {
				node.left.parent = node;
			}

			// child takes ownership of parent, as it's right child.
			leftChild.right = node;

			if (leftChild.parent !== null) {
				// fix the parent pointers
				if (leftChild.parent.left === node) {
					leftChild.parent.left = leftChild;
				}
				else if (leftChild.parent.right === node) {
					leftChild.parent.right = leftChild;
				}
			}
			else {
				this.avltree[root] = leftChild;
			}

			this.updateBalance(node);
			this.updateBalance(leftChild);

			return leftChild;
		}

		/** @private */
		leftRightRotation(node) {
			node = this.rightRotation(node);
			node = this.leftRotation(node.parent);
			return node;
		}

		/** @private */
		rightLeftRotation(node) {
			node = this.leftRotation(node);
			node = this.rightRotation(node.parent);
			return node;
		}

		/**
		 * @private
		 *
		 * Iterates up the tree starting at `node` and updating each node's balance property
		 *
		 * @param {AVLNode} node
		 */
		updateBalance(node) {
			while (node !== null) {
				node.updateBalance();
				node = node.parent;
			}
		}
	}

	/**
	 * @private
	 *
	 * So that client code can't access object properties
	 */
	const helper = Symbol('helper');

	/**
	 * @classdesc AVLTree
	 * @implements {BinaryTree}
	 */
	class AVLTree extends BinaryTree {
		/**
		 * Creates an empty AVL Tree
		 *
		 * @param {CmpFtn?} - If no comparison function is passed then the [default comparison function]{@link Collection#cmpFtn} is used.
		 */
		constructor(cmpFtn=null) {
			super(cmpFtn);
			this[helper] = new PrivateMethods(this);
		}

		add(element) {
			const node = new AVLNode(element);
			if (this[root] === null) {
				this[root] = node;
			}
			else {
				this[helper].add(node, this[root]);
			}
			this[size] += 1;
			return this;
		}

		addAll(...elements) {
			for (let e of elements) {
				this.add(e);
			}
			return this;
		}

		delete(element) {
			if (this[size] === 0) {
				throw new EmptyCollectionError('Can\'t delete from an empty AVLTree');
			}
			if (this[size] === 1) {
				if (this[cmpf](this[root].element, element) === 0) {
					this[root] = null;
					this[size] = 0;
					return true;
				}
				else {
					return false;
				}
			}
			const ret = this[helper].delete(element, this[root]);
			if (ret) {
				this[size] -= 1;
			}
			return ret;
		}

		map(cb) {
			super._throwIfNotFunction(cb);
			let newTree = new AVLTree(this[cmpf]);
			for (let e of super.preOrder()) {
				if (cb(e)) {
					newTree.add(e);
				}
			}
			return newTree;
		}
	}

	return AVLTree;

})(__BINARYTREESYMBOLS.SIZE, __BINARYTREESYMBOLS.ROOT, __BINARYTREESYMBOLS.CMPF);
