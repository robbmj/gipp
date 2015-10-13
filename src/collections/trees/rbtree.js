
import BinaryTree from './binarytree.interface';
import __BINARYTREESYMBOLS from './private/__binarytreesymbols';

import {RBNode} from './private/__binarytreenodes';

// just for debug
import ListQueue from './../queues/listqueue';

/*
Properties.
1. The root node must be black
2. Red Nodes can only have black children and the parent of every red node is black
3. black nodes can have red or black children
4. All null nodes are considered black
5. the black height of all null must be uniform
6. the height of a rb tree is log_4(n) < height < 1+log_2(n)

// The Lean Start Up

Rotations:
1. Right Rotation
	0)		let p = parent, c = child
	i)		c becomes the parent of p
	ii)		p becomes the right child of c
	iii)	c becomes the child of p's parent
	iv)		c's right child becomes p left child

2. Left Rotation
	0)		let p = parent, c = child
	i)		c becomes the parent of p
	ii) 	p becomes the left child of c
	iii)	c becomes the child of p's parent
	iv) 	p's left child becomes the right child of c

3. Right Left Rotation.
	i)	run the left rotation
	ii) run the right rotation on the new parent

4. Left Right Rotation
	i)	run the right rotation
	ii)	run the left rotation on the new parent

Insertions:

let x = the new node,
    cur = the node curently iterating over,
    curP = the parent of cur,
    curPP = the parent of curP

Initially colour x red, insert into tree

Walk up the tree from x untill we reach a black node (could be the root)

	if cur is the left child of curP then:   (CASE A)

		if the right child of curPP is RED then:
			<CASE 1>

		else if cur is the right child of curP then: ???
			<CASE 2, CASE 3>


	else:
		reverse of CASE B - reverse of case A

colour root black:

<CASE 1>
	recolour curP RED
	recolour cur and the right child of curP BLACK
	cur = curPP
<CASE 2>
	Left Rotation
<CASE 3>
	Right Rotation

4.
*/
export default ((size, root, cmpf) => {

	const helper = Symbol('helper');


	class Private {
		constructor(tree) {
			this.tree = tree;
		}

		add(nodeToAdd, curNode) {
			while (true) {
				const cmp = this.tree[cmpf](nodeToAdd.element, curNode.element);

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
			return curNode;
		}

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
				this.tree[root] = leftChild;
			}

			return leftChild;
		}

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
				this.tree[root] = rightChild;
			}

			return rightChild;
		}

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
	}


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
			this[helper] = new Private(this);
		}

		add(element) {
			let newNode = new RBNode(element);
			if (this[root] === null) {
				this[root] = newNode;
			}
			else {
				// parent is the parent node of newNode
				let parent = this[helper].add(newNode, this[root]);

				const s = ('Size: ' + this.size) + ('\tparent is black: ' + parent.isBlack()) + ('\tparent is not root: ' + (parent !== this[root]));
				console.log(s);

				while (parent !== null && parent !== this[root] && !parent.isBlack()) {

					const grandParent = parent.parent;

					const uncle = grandParent.left === parent
								? grandParent.right
								: grandParent.left;

					// all null nodes (children of leaves) are black
					if (uncle === null || uncle.isBlack()) {
						console.log('CASE A');
						// left left case (Single Right Rotation)
						if (newNode === parent.left && parent === grandParent.left) {
							console.log('Single Right Rotation');
							grandParent.toggleColor();
							parent.toggleColor();
							parent = this[helper].rightRotation(grandParent);
						}
						// left right case (LEFT RIGHT ROTATION)
						else if (newNode === parent.right && parent === grandParent.right) {

							console.log('Single Left Rotation');
							grandParent.toggleColor();
							parent.toggleColor();
							parent = this[helper].leftRotation(grandParent);
						}
						// right right case
						else if (newNode === parent.left && parent === grandParent.right) {
							console.log('LEFT Right Rotation');
							newNode.color = RBNode.BLACK;
							grandParent.color = RBNode.BLACK;
							parent = this[helper].leftRightRotation(parent);
						}
						// right left case
						else { // newNode === parent.right && parent === grandParent.left
							console.log('Right Left Rotation');
							newNode.color = RBNode.BLACK;
							grandParent.color = RBNode.BLACK;
							parent = this[helper].rightLeftRotation(parent);
						}
					}
					else {
						console.log('CASE B');
						parent.color = RBNode.BLACK;
						uncle.color = RBNode.BLACK;
						grandParent.color = RBNode.RED;
						newNode = grandParent;
						parent = newNode.parent;
					}
				}
			}
			//console.log('here', RBNode.BLACK);
			this[root].color = RBNode.BLACK;
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

		toString() {
			return 'RBTree: ' + super.toString();
		}

		debug() {

			const cb = (node) => {
				console.log('--------------------------- START -----------------------------------');
				console.log('Value: ' 	+ node.element);
				console.log('Color: ' 	+ ((node.color) ? 'Black' : 'Red'));
				console.log('Left: ' 	+ ((node.left !== null) ? node.left.element : 'null'));
				console.log('Right: ' 	+ ((node.right !== null) ? node.right.element : 'null'));
				console.log('____________________________ END ____________________________________');
			};

			const bfsHelper = (queue) => {

				if (queue.isEmpty) {
					return false;
				}

				const node = queue.dequeue();

				cb(node);

				if (node.left !== null) {
					queue.enqueue(node.left);
				}

				if (node.right !== null) {
					queue.enqueue(node.right);
				}

				return bfsHelper(queue);
			};

			const queue = new ListQueue(this[cmpf]);
			queue.enqueue(this[root]);
			bfsHelper(queue);
		}

	}

	return RBTree;

})(__BINARYTREESYMBOLS.SIZE, __BINARYTREESYMBOLS.ROOT, __BINARYTREESYMBOLS.CMPF);
