
module.exports = function (ctx) {

	describe('Binary Tree Interface Tests', function () {

		var tree;

		beforeEach(function () {
			tree = ctx.collection;
		});

		describe('Pre-Order Tests', function () {
			tree.addAll(2,1,3);
			var order = [2,1,3], i = 0;
			tree.inOrderTraversal(function (e) {
				expect(e).toEqual(order[i++]);
			});
		});

		describe('In-Order Tests', function () {

		});

		describe('Post-Order Tests', function () {

		});

		describe('BFS Tests', function () {

		});

		describe('BFS Tests', function () {

		});

		describe('Height Tests', function () {

		});

		describe('IsBalanced Tests', function () {

		});
	});
};
