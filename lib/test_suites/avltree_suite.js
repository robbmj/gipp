
var orderExpected = require('./order_expected');

module.exports = function (ctx) {

	var avltree;

	beforeEach(function () {
		avltree = ctx.collection;
	});

	describe('AVLTree Tests', function () {
		it('Should be produce a right left rotation', function () {
			avltree.addAll(3,1,2);
			avltree.preOrderTraversal(orderExpected([2,1,3]));
			expect(avltree.isBalanced()).toEqual(true);
		});

		it('Should be produce a single left rotation', function () {
			avltree.addAll(1,2,3);
			var order = [2,1,3], i = 0;
			avltree.preOrderTraversal(orderExpected([2,1,3]));
			expect(avltree.isBalanced()).toEqual(true);
		});

		it('Should be produce a left right rotation', function () {
			avltree.addAll(1,3,2);
			avltree.preOrderTraversal(orderExpected([2,1,3]));
			expect(avltree.isBalanced()).toEqual(true);
		});

		it('Should be produce a single right rotation', function () {
			avltree.addAll(3,2,1);
			avltree.preOrderTraversal(orderExpected([2,1,3]));
			expect(avltree.isBalanced()).toEqual(true);
		});

		it('After deleting the root, the new root should be 3', function () {
			avltree.addAll(2,1,4,3); // no rotations
			avltree.delete(2); // tests the case when a node has two children
			avltree.preOrderTraversal(orderExpected([3,1,4]));
			expect(avltree.isBalanced()).toEqual(true);
		});

		it('After deleting a leaf node, the rest of the tree should be unchanged', function () {
			avltree.addAll(2,1,4,3); // no rotations
			avltree.delete(3); // tests the case when a node is a leaf
			avltree.preOrderTraversal(orderExpected([2,1,4]));
			expect(avltree.isBalanced()).toEqual(true);
		});

		it('After deleting a node with one child, that child should replace the deleted node', function () {
			avltree.addAll(2,1,4,3); // no rotations
			avltree.delete(4); // tests the case when a node has one child
			avltree.preOrderTraversal(orderExpected([2,1,3]));
			expect(avltree.isBalanced()).toEqual(true);
		});

		// tests the case when a node is a leaf and its deletiong should cause a left right rotation
		it('After deleting a leaf node, that causes a height inbalance the tree should rebalnce', function () {
			avltree.addAll(2,1,4,3); // no rotations
			avltree.delete(1);
			avltree.preOrderTraversal(orderExpected([3,2,4]));
			expect(avltree.isBalanced()).toEqual(true);
		});

		// tests the case when a node is a leaf and its deletiong should cause a right left rotation
		it('After deleting a leaf node, that causes a height inbalance the tree should rebalnce', function () {
			avltree.addAll(3,1,2,4); // no rotations
			avltree.delete(4);
			avltree.preOrderTraversal(orderExpected([2,1,3]));
			expect(avltree.isBalanced()).toEqual(true);
		});
	});
};


