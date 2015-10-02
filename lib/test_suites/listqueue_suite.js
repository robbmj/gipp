module.exports = function (ctx) {

	describe("ListQueue Tests", function () {

		var queue;

		beforeEach(function() {
	    	queue = ctx.collection;
	  	});

		it('Should enqueue a,b,c and after setting the capacity to 2 should dequeue b,c', function () {
			queue.addAll('a','b','c');
			expect(queue.size).toEqual(3);
			queue.capacity = 2;
			expect(queue.size).toEqual(2);
			expect(queue.dequeue()).toEqual('b');
			expect(queue.dequeue()).toEqual('c');
			expect(queue.isEmpty).toEqual(true);
		});

		it('peek() should return 1', function () {
			queue.add(1).add(2).add(3);
			expect(queue.peek()).toEqual(1);
		});

		it('poll() should return 3', function () {
			queue.add(1).add(2).add(3);
			expect(queue.poll()).toEqual(3);
		});
	});
};
