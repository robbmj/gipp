
var orderExpected = require('./order_expected');

module.exports = function (ctx) {

	describe("MinHeap Tests", function () {

		var heap;

		beforeEach(function() {
	    	heap = ctx.collection;
	  	});

		it('peek() should return 1', function () {
			heap.add(1);
			expect(heap.peek()).toEqual(1);
		});

		it('peek() should return 1', function () {
			heap.addAll(1,2,3);
			expect(heap.peek()).toEqual(1);
		});

		it('min() should return 1,2,3,4,5', function () {
			heap.add(5).add(4).addAll(3,2,1);
			var order = [1,2,3,4,5], i = 0;
			while (!heap.isEmpty) {
				expect(heap.min()).toEqual(order[i++]);
			}
		});

		it('shift() should return 1,2,4,5', function () {
			heap.add(5).add(4).addAll(3,2,1);
			heap.delete(3);
			var order = [1,2,4,5], i = 0;
			while (!heap.isEmpty) {
				expect(heap.shift()).toEqual(order[i++]);
			}
		});

		describe('Breadth First Traversal Tests:', function () {
			it('forEach() should iterate in the order of -1,2,0,5,3,4,1', function () {
				heap.addAll(5,4,3,2,1,0,-1);
				heap.forEach(orderExpected([-1,2,0,5,3,4,1]));
			});

			it('toString() should return {|7|4,6|1,3,2,5|}', function () {
				expect(heap.addAll(5,4,3,2,1,0,-1).toString()).toEqual('MinHeap: {|-1|2,0|5,3,4,1|}');
			});
		});

		it('Should recalim unused memory', function () {
			for (var i = 199; i >= 0; i--) {
				heap.add(i);
			}
			var prev = Number.NEGATIVE_INFINITY, curr;
			while (!heap.isEmpty) {
				curr = heap.min();
				expect(curr).toBeGreaterThan(prev);
				prev = curr;
			}
		});
	});
};
