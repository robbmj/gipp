
module.exports = function (ctx) {

	describe('Binary Tree Interface Tests', function () {

		var tree;

		beforeEach(function () {
			tree = ctx.collection;
		});

		describe('Pre-Order Tests', function () {
			it('Should call in the order of 2,1,3', function () {
				tree.addAll(2,1,3);
				var order = [2,1,3], i = 0;
				tree.preOrderTraversal(function (e) {
					expect(e).toEqual(order[i++]);
				});
			});
		});

		describe('In-Order Tests', function () {
			it('Should call in the order of 1,2,3', function () {
				tree.addAll(2,1,3);
				var order = [1,2,3], i = 0;
				tree.preOrderTraversal(function (e) {
					expect(e).toEqual(order[i++]);
				});
			});
		});

		describe('Post-Order Tests', function () {
			it('Should call in the order of 1,3,2', function () {
				tree.addAll(2,1,3);
				var order = [1,3,2], i = 0;
				tree.preOrderTraversal(function (e) {
					expect(e).toEqual(order[i++]);
				});
			});
		});

		describe('BFS Tests', function () {
			it('Should call in the order of 2,1,3', function () {
				tree.addAll(2,1,3);
				var order = [2,1,3], i = 0;
				tree.bfs(function (e) {
					expect(e).toEqual(order[i++]);
					return false;
				});
			});

			it('Should return false', function () {
				tree.addAll(2,1,3);
				var ret = tree.bfs(function (e) {
					return e === 4;
				});
				expect(ret).toEqual(false);
			});

			it('Should return true', function () {
				tree.addAll(2,1,3);
				var ret = tree.bfs(function (e) {
					return e === 3;
				});
				expect(ret).toEqual(true);
			});
		});

		describe('Height Tests', function () {
			it('Should return 0', function () {
				expect(tree.height()).toEqual(0);
			});

			it('Should return 1', function () {
				tree.add(5);
				expect(tree.height()).toEqual(1);
			});

			it('Should return 2', function () {
				tree.add(5).add(4);
				expect(tree.height()).toEqual(2);
			});

			it('Should return 3', function () {
				tree.add(5).add(4).add(6).add(7);
				expect(tree.height()).toEqual(3);
			});
		});

		describe('IsBalanced Tests', function () {
			it('Should return true', function () {
				expect(tree.isBalanced()).toEqual(true);
			});

			it('Should return 1', function () {
				tree.add(5);
				expect(tree.isBalanced()).toEqual(true);
			});

			it('Should return 2', function () {
				tree.add(5).add(4);
				expect(tree.isBalanced()).toEqual(true);
			});

			it('Should return 3', function () {
				tree.add(5).add(4).add(6).add(7);
				expect(tree.isBalanced()).toEqual(true);
			});
		});
	});
};
