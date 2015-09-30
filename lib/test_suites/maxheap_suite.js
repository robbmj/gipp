
var orderExpected = require('./order_expected');

module.exports = function (ctx) {

	describe("MaxHeap Tests", function () {

		var heap;

		beforeEach(function() {
	    	heap = ctx.collection;
	  	});

		it('peek() should return 1', function () {
			heap.add(1);
			expect(heap.peek()).toEqual(1);
		});

		it('peek() should return 3', function () {
			heap.addAll(1,2,3);
			expect(heap.peek()).toEqual(3);
		});

		it('max() should return 5,4,3,2,1', function () {
			heap.add(1).add(2).addAll(3,4,5);
			var order = [5,4,3,2,1], i = 0;
			while (!heap.isEmpty) {
				expect(heap.max()).toEqual(order[i++]);
			}
		});

		it('shift() should return 5,4,2,1', function () {
			heap.add(1).add(2).addAll(3,4,5);
			heap.delete(3);
			var order = [5,4,2,1], i = 0;
			while (!heap.isEmpty) {
				expect(heap.shift()).toEqual(order[i++]);
			}
		});

		describe('Breadth First Traversal Tests:', function () {
			it('forEach() should iterate in the order of 7,4,6,1,3,2,5', function () {
				heap.addAll(1,2,3,4,5,6,7);
				heap.forEach(orderExpected([7,4,6,1,3,2,5]));
			});

			it('toString() should return {|7|4,6|1,3,2,5|}', function () {
				expect(heap.addAll(1,2,3,4,5,6,7).toString()).toEqual('MaxHeap: {|7|4,6|1,3,2,5|}');
			});
		});

		it('Should recalim unused memory', function () {
			for (var i = 0; i < 200; i++) {
				heap.add(i);
			}
			var prev = Number.POSITIVE_INFINITY, curr;
			while (!heap.isEmpty) {
				curr = heap.max();
				expect(curr).toBeLessThan(prev);
				prev = curr;
			}
		});
	});
};
