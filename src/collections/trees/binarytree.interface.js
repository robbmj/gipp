
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
		 * @param {cmpFtn?} - If no comparison function is passed then the [default comparison function]{@link Collection#cmpFtn} is used.
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
		 * @param {treeSeachCallback} cb - The callback to be applied to each element in the Binary Tree
		 */
		bfs(cb) {
			super._throwIfNotFunction(cb);
		}

		contains(element) {
			let ret = false;
			this.bfs((e) => {
				ret = this[cmpf](e, element) === 0;
				return ret;
			});
			return ret;
		}

		/**
		 * The dfs() method implements the Depth First Search algorithum for a Binary Tree.
		 *
		 * @throws {TypeError} If cb is not a function.
		 *
		 * @param {treeSeachCallback} cb - The callback to be applied to each element in the Binary Tree
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
		 * The inOrder method is an iterator that visits each node in the tree.
		 * The In Order algorithum first visits the root node's left subtree, then the root its self,
		 * then the right subtree.
		 *
		 * @return {CollectionIterator}
		 */
		*inOrder() {
			const helper = function* (node) {
				if (node.left !== null) {
					yield * helper(node.left);
				}
				yield node.element;
				if (node.right !== null) {
					yield * helper(node.right);
				}
			};
			yield * helper();
		}

		/**
		 * The preOrder method is an iterator that visits each node in the tree.
		 * The Pre Order algorithum first visits the the root its self, then the root node's left subtree,
		 * then the right subtree.
		 *
		 * @return {CollectionIterator}
		 */
		*preOrder() {
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
		 * The postOrder method is an iterator that visits each node in the tree.
		 * The Post Order algorithum first visits the root node's left subtree, then the right subtree,
		 * then the root its self.
		 *
		 * @return {CollectionIterator}
		 */
		*postOrder() {
			const helper = function* (node) {
				if (node.left !== null) {
					yield * helper(node.left);
				}
				if (node.right !== null) {
					yield * helper(node.right);
				}
				yield node.element;
			};
			yield * helper();
		}

		/**
		 * This callback type that is passed to {@link BinaryTree#bfs} and {@link BinaryTree#dfs} and is called `treeSeachCallback`.
		 *
		 * @callback treeSeachCallback
		 * @param {E} element - An element contained within the collection.
		 * @return {boolean} True if `element` is the element being searched for, false otherwise
		 */



	}

	return BinaryTree;
})(__BINARYTREESYMBOLS.SIZE, __BINARYTREESYMBOLS.ROOT, __BINARYTREESYMBOLS.CMPF);
