module.exports = function (ctx) {

	describe("PriorityQueue Tests", function () {

		var queue;

		beforeEach(function() {
	    	queue = ctx.collection;
	  	});

		it('Should enqueue 1,3,5 and should dequeue 5,3,1', function () {
			queue.addAll(1,3,5);
			expect(queue.size).toEqual(3);
			expect(queue.dequeue()).toEqual(5);
			expect(queue.dequeue()).toEqual(3);
			expect(queue.dequeue()).toEqual(1);
			expect(queue.isEmpty).toEqual(true);
		});

		it('peek() should return 3', function () {
			queue.enqueue(1).enqueue(2).add(3);
			expect(queue.peek()).toEqual(3);
		});

		it('poll() should return 1,1,1', function () {
			queue.enqueueAll(1,2,3);
			expect(queue.poll()).toEqual(1);
			queue.dequeue();
			expect(queue.poll()).toEqual(1);
			queue.dequeue();
			expect(queue.poll()).toEqual(1);
		});

		it('poll() should return 1,0,-1', function () {
			queue.enqueue(1)
			expect(queue.poll()).toEqual(1);
			queue.enqueue(0);
			expect(queue.poll()).toEqual(0);
			queue.enqueue(-1);
			expect(queue.poll()).toEqual(-1);
		});



		describe('reverse comparison tests', function () {
			var reverseQueue;
			beforeEach(function () {
				reverseQueue = new queue.constructor(function (a, b) {return a - b;});
			});

			it('Should enqueue 5,3,1 and should dequeue 1,3,5', function () {
				reverseQueue.addAll(5,3,1);
				expect(reverseQueue.size).toEqual(3);
				expect(reverseQueue.dequeue()).toEqual(1);
				expect(reverseQueue.dequeue()).toEqual(3);
				expect(reverseQueue.dequeue()).toEqual(5);
				expect(reverseQueue.isEmpty).toEqual(true);
			});

			it('peek() should return 1', function () {
				reverseQueue.enqueue(3).enqueue(1).add(2);
				expect(reverseQueue.peek()).toEqual(1);
			});

			it('poll() should return 1,1,1', function () {
				reverseQueue.enqueueAll(1,2,3);
				expect(reverseQueue.poll()).toEqual(3);
				reverseQueue.dequeue();
				expect(reverseQueue.poll()).toEqual(3);
				reverseQueue.dequeue();
				expect(reverseQueue.poll()).toEqual(3);
			});

			it('poll() should return -1,0,1', function () {
				reverseQueue.enqueue(-1)
				expect(reverseQueue.poll()).toEqual(-1);
				reverseQueue.enqueue(0);
				expect(reverseQueue.poll()).toEqual(0);
				reverseQueue.enqueue(1);
				expect(reverseQueue.poll()).toEqual(1);
			});
		});

		// new queue.constructor(function (a,b) {return a-b;});
	});
};
