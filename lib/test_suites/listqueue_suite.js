module.exports = function (ctx) {

	describe("Stack Tests", function () {

		var queue;

		beforeEach(function() {
	    	queue = ctx.collection;
	  	});

		it('Should have a default capacity of Number.POSITIVE_INFINITY', function () {
			expect(queue.capacity).toEqual(Number.POSITIVE_INFINITY);
		});

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

		it('Should enqueue 1,2,3 and dequeue 1,2,3', function () {
			queue.enqueue(1).enqueue(2).enqueue(3);
			expect(queue.dequeue()).toEqual(1);
			expect(queue.dequeue()).toEqual(2);
			expect(queue.dequeue()).toEqual(3);
		});

		it('Should enqueue a,b,c and dequeue a,b,c', function () {
			queue.enqueueAll('a','b','c');
			expect(queue.dequeue()).toEqual('a');
			expect(queue.dequeue()).toEqual('b');
			expect(queue.dequeue()).toEqual('c');
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
