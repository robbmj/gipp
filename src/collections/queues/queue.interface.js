
import Collection from "./../collection.interface";
import {UnimplementedError} from "./../exceptions";

/**
 *
 *
 * @since 0.1.0
 * @interface
 * @augments Collection
 *
 * @classdesc The parent interface for all Gipp queues.
 * All queues in Gipp have an optional maximum capacity. If
 * an insertion into the queue would cause the size of the queue
 * to be greater than the capacity, then the head of the queue
 * is removed. The default capacity of all queues is `Number.POSITIVE_INFINITY`.
 *
 * @example
 * let queue = gipp.ListQueue();
 * queue.capacity = 2;
 * queue.enqueueAll(1,2);
 * queue.enqueue(3); // 1 is silently removed from the head of the queue.
 *
 * let queue = gipp.ListQueue();
 * queue.enqueueAll(1,2,3);
 * queue.capacity = 2; // 1 is silently removed from the head of the queue.
 */
class Queue extends Collection {

	/**
	 * @throws {UnimplementedError} If directly instantiated.
	 */
	constructor() {
		super();
		if (this.constructor.name === 'Queue') {
			throw new UnimplementedError('Queue');
		}
	}

	/**
	 * Returns the maximum number of elements the queue can hold
	 *
	 * @return {number}
	 */
	get capacity() {
		throw new UnimplementedError('get capacity');
	}

	/**
	 * Sets the maximum number of elements the queue can hold. Throws {@link IllegalArgumentError} If `capacity` is less than or equal to 0.
	 *
	 * @default Number.POSITIVE_INFINITY
	 *
	 * @throws {IllegalArgumentError} If `capacity` is less than or equal to 0.
	 *
	 * @param {number} capacity
	 */
	set capacity(capacity) {
		throw new UnimplementedError('set capacity');
	}

	/**
	 * Returns and removes the head element of the queue
	 *
	 * @thorws {EmptyCollectionError} If the queue is empty
	 *
	 * @return {E} The head element in the queue
	 */
	dequeue() {
		throw new UnimplementedError('dequeue');
	}

	/**
	 * Adds an element to the tail of the queue. If adding the element to the queue
	 * would cause its size to be grater than its capacity then the head element of the
	 * queue is removed.
	 *
	 * The same is true for {@link Queue#add}
	 *
	 * @param {E} element - The element to be added to the tail queue
	 * @return {Queue}
	 */
	enqueue(element) {
		throw new UnimplementedError('enqueue');
	}

	/**
	 * Adds each element to the tail of the queue. If adding the element to the queue
	 * would cause its size to be grater than its capacity then the head element of the
	 * queue is removed.
	 *
	 * The same is true for {@link Queue#addAll}
	 *
	 * @param {...E} elements - The elements to be added to the queue
	 * @return {Queue}
	 */
	enqueueAll(...elements) {
		throw new UnimplementedError('enqueueAll');
	}

	/**
	 * Returns but does not remove the head of the queue
	 *
	 * @thorws {EmptyCollectionError} If the queue is empty
	 *
	 * @return {E} The head element in the queue
	 */
	peek() {
		throw new UnimplementedError('peek');
	}

	/**
	 * Returns but does not remove the tail element of the queue
	 *
	 * @thorws {EmptyCollectionError} If the queue is empty
	 *
	 * @return {E} The tail element on the queue
	 */
	poll() {
		throw new UnimplementedError('poll');
	}
}

export default Queue;
