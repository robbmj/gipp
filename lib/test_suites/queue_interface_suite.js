module.exports = function (ctx) {

	describe("Queue Interface Tests", function () {

		var queue;

		beforeEach(function() {
	    	queue = ctx.collection;
	  	});

		it('Should have a default capacity of Number.POSITIVE_INFINITY', function () {
			expect(queue.capacity).toEqual(Number.POSITIVE_INFINITY);
		});

		it('capacity should throw if set to <= 0', function () {
			try {
				queue.capacity = 0;
				expect(true).toEqual(false);
			}
			catch (e) {
				expect(typeof e === 'object').toEqual(true);
			}
		})

		it('dequeue() should throw an exception if the queue is empty', function () {
			expect(queue.isEmpty).toEqual(true);
			expect(queue.dequeue).toThrow();
		});

		it('peek() should throw an exception if the queue is empty', function () {
			expect(queue.isEmpty).toEqual(true);
			expect(queue.peek).toThrow();
		});

		it('poll() should throw an exception if the queue is empty', function () {
			expect(queue.isEmpty).toEqual(true);
			expect(queue.poll).toThrow();
		});

		it('Should enqueue 1 and dequeue 1', function () {
			queue.enqueue(1);
			expect(queue.dequeue()).toEqual(1);
		});

		it('Should enqueue a,b,c and after setting the capacity to 1 size should be 1', function () {
			queue.addAll('1','2','4');
			expect(queue.size).toEqual(3);
			queue.capacity = 1;
			expect(queue.size).toEqual(1);
		});
	});
};
