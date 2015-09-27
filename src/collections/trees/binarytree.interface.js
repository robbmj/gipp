
import Collection from './../collection.interface';
import __BINARYTREESYMBOLS from './private/__binarytreesymbols';

export default ((size, root, cmpf) => {
	/**
	 * The parent interface for all Gipp Binary Trees
	 * @interface
	 * @augments Collection
	 */
	class BinaryTree extends Collection {

		/**
		 * Creates an empty Binary Tree
		 *
		 * @throws {UnimplementedError} If directly instantiated.
		 *
		 * @param {CmpFtn?} - If no comparison function is passed then the [default comparison function]{@link Collection#cmpFtn} is used.
		 */
		constructor(cmpFtn=null) {
			super();
			if (this.constructor.name === 'BinaryTree') {
				throw new UnimplementedError('BinaryTree');
			}
			this[size] = 0;
			this[root] = null;
			this[cmpf] = cmpFtn || Collection.cmpFtn;
		}

		get size() {
			return this[size];
		}

		get isEmpty() {
			return this[size] === 0;
		}

		*[Symbol.iterator]() {
			for (let e of this.inOrder()) {
				yield e;
			}
		}

		/**
		 * The bfs() method implements the Breadth First Search algorithum for a Binary Tree.
		 *
		 * @throws {TypeError} If cb is not a function.
		 *
		 * @param {SeachCallback} cb - The callback to be applied to each element in the Binary Tree
		 * @return {boolean} Returns true if the element was found, false otherwise.
		 */
		bfs(cb) {
			super._throwIfNotFunction(cb);

			if (this[size] === 0) {
				return false;
			}

			// TODO: replace this with a real queue
			const bfsHelper = (queue) => {

				if (queue.length === 0) {
					return false;
				}

				const node = queue.shift();

				if (cb(node.element)) {
					return true;
				}

				if (node.left !== null) {
					queue.push(node.left);
				}

				if (node.right !== null) {
					queue.push(node.right);
				}

				return bfsHelper(queue);
			};

			return bfsHelper([this[root]]);
		}

		contains(element) {
			return this.bfs((e) => this[cmpf](e, element) === 0);
		}

		/**
		 * The dfs() method implements the Depth First Search algorithum for a Binary Tree.
		 *
		 * @throws {TypeError} If cb is not a function.
		 *
		 * @param {SeachCallback} cb - The callback to be applied to each element in the Binary Tree
		 * @return {boolean} Returns true if the element was found, false otherwise.
		 */
		dfs(cb) {
			super._throwIfNotFunction(cb);
		}


		forEach(cb) {
			super._throwIfNotFunction(cb);
			for (let e of this.inOrder()) {
				cb(e);
			}
		}

		/**
		 * The length from the root of the tree to furthest leaf
		 *
		 * @return {number}
		 */
		height() {
			// TODO: Write a better method for finding the height of a tree.
			// recursive N does not sound very good.
			const _height = (node) => {
				if (node === null) {
					return 0;
				}
				return Math.max(_height(node.left), _height(node.right)) + 1;
			}
			return _height(this[root]);
		}

		/**
		 * A Binary Tree is balanced if its height is less than or equal to the log (base 2) its size
		 *
		 * @return {boolean} True if the tree is balnced, false otherwise
		 */
		isBalanced() {
			const height = this.height();
			if (height <= 2) {
				return true;
			}
			const log2Nodes = Math.log(this[size]) * Math.LOG2E;
			return (height - 1) <= log2Nodes;
		}

		/**
		 * The inOrder method is a generator that visits each node in the tree.
		 * The In Order algorithum first visits the root node's left subtree, then the root its self,
		 * then the right subtree.
		 *
		 * The method is available in ES 2015 only, to perform an in order traversal in < ES 2015
		 * use {@link BinaryTree#inOrderTraversal} instead.
		 *
		 * @return {CollectionGenerator}
		 *
		 * @example
		 * tree.addAll(2,1,3);
		 * for (let e of tree.inOrder()) console.log(e); // 1,2,3
		 */
		*inOrder() {
			if (this[size] === 0) {
				return;
			}
			const inOrderHelper = function* (node) {
				if (node.left !== null) {
					yield * inOrderHelper(node.left);
				}
				yield node.element;
				if (node.right !== null) {
					yield * inOrderHelper(node.right);
				}
			};
			yield * inOrderHelper(this[root]);
		}

		/**
		 * @see {@link BinaryTree#inOrder}
		 *
		 * @throws {TypeError} If cb is not a function.
		 *
		 * @example
		 * tree.addAll(2,1,3);
		 * tree.inOrderTraversal(function (e) { console.log(e); }); // 1,2,3
		 *
		 * @param {IteratorCallback}
		 */
		 inOrderTraversal(cb) {
		 	super._throwIfNotFunction(cb);
		 	for (let e of this.inOrder()) {
		 		cb(e);
		 	}
		 }


		/**
		 * The preOrder method is a generator that visits each node in the tree.
		 * The Pre Order algorithum first visits the the root its self, then the root node's left subtree,
		 * then the right subtree.
		 *
		 * The method is available in ES 2015 only, to perform an in order traversal in < ES 2015
		 * use {@link BinaryTree#preOrderTraversal} instead.
		 *
		 * @return {CollectionGenerator}
		 *
		 * @example
		 * tree.addAll(2,1,3);
		 * for (let e of tree.preOrder()) console.log(e); // 2,1,3
		 */
		*preOrder() {
			if (this[size] === 0) {
				return;
			}
			// TODO: replace this with a real stack
			const stack = [];
			stack.push(this[root]);
			while (stack.lenght > 0) {
				const node = stack.pop();
				yield node.element;
				if (stack.right !== null) {
					stack.push(node.right);
				}
				if (stack.left !== null) {
					stack.push(node.left);
				}
			}
		}

		/**
		 * @see {@link BinaryTree#preOrder}
		 *
		 * @throws {TypeError} If cb is not a function.
		 *
		 * @example
		 * tree.addAll(2,1,3);
		 * tree.preOrderTraversal(function (e) { console.log(e); }); // 2,1,3
		 *
		 * @param {IteratorCallback}
		 */
		 preOrderTraversal(cb) {
		 	super._throwIfNotFunction(cb);
		 	for (let e of this.preOrder()) {
		 		cb(e);
		 	}
		 }


		/**
		 * The postOrder method is a generator that visits each node in the tree.
		 * The Post Order algorithum first visits the root node's left subtree, then the right subtree,
		 * then the root its self.
		 *
		 * The method is available in ES 2015 only, to perform an in order traversal in < ES 2015
		 * use {@link BinaryTree#preOrderTraversal} instead.
		 *
		 * @return {CollectionGenerator}
		 *
		 * @example
		 * tree.addAll(2,1,3);
		 * for (let e of tree.postOrder()) console.log(e); // 1,3,2
		 */
		*postOrder() {
			if (this[size] === 0) {
				return;
			}
			const postOrderHelper = function* (node) {
				if (node.left !== null) {
					yield * postOrderHelper(node.left);
				}
				if (node.right !== null) {
					yield * postOrderHelper(node.right);
				}
				yield node.element;
			};
			yield * postOrderHelper(this[root]);
		}

		/**
		 * @see {@link BinaryTree#postOrder}
		 *
		 * @throws {TypeError} If cb is not a function.
		 *
		 * @example
		 * tree.addAll(2,1,3);
		 * tree.inPostTraversal(function (e) { console.log(e); }); // 1,3,2
		 *
		 * @param {IteratorCallback}
		 */
		 postOrderTraversal(cb) {
		 	super._throwIfNotFunction(cb);
		 	for (let e of this.postOrder()) {
		 		cb(e);
		 	}
		 }


		toString() {
			let str = '{';
			this.bfs((e) => {
				str += `${e}, `;
				return false;
			});
			str = str.substring(0, str.length - 2);
			return str + '}';
		}
	}

	return BinaryTree;

})(__BINARYTREESYMBOLS.SIZE, __BINARYTREESYMBOLS.ROOT, __BINARYTREESYMBOLS.CMPF);
