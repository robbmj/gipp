
import {DListNode} from "./private/__listnodes";
import LinkedList from "./linkedlist";
import {EmptyListException} from "./../exceptions";
import __LISTSYMBOLS from './private/__listsymbols';

export default ((size, head, back, cmpf) => {

	/**
	 * @classdesc Doubly Linked List.
	 * All operations have the same time complexity and those of {@link LinkedList},
	 * with the exception that `pop` has a time complexity of O(1).
	 *
	 * Operations that index into the list will traverse the list from the beginning
	 * or the end, whichever is closer to the specified index.
	 *
	 * @since 0.1.0
	 * @implements {List}
	 * @extends LinkedList
	 */
	class DoubleLinkedList extends LinkedList {
		// Time Complexity: O(1), Space Complexity: O(1)
		/**
		 * Creates an empty Doubly Linked List
		 *
	 	 * @since 0.1.0
		 * @param {CmpFtn?} - If no comparison function is passed then the [default comparison function]{@link Collection#cmpFtn} is used.
		 */
		constructor(cmpFtn=null) {
			super(cmpFtn);
		}

		/** @inheritdoc */
		add(element) {
			let node = new DListNode(element);
			if (this[head] === null) {
				this[head] = node;
				this[back] = node;
			}
			else {
				node.prev = this[back];
				this[back].next = node;
				this[back] = node;
			}
			this[size] += 1;
			return this;
		}

		/** @inheritdoc */
		delete(element) {
			if (this[size] === 0) {
				throw new EmptyCollectionError('Can\'t delete from an empty LinkedList');
			}

			if (this[head].element === element) {
				this.shift();
				return true;
			}

			if (this[size] === 1) {
				return false;
			}

			let next = this[head].next;
			let prev = this[head];

			while (this[cmpf](next.element, element) !== 0) {
				prev = next;
				next = next.next;

				if (next === null) {
					// element is not in the list
					return false;
				}
			}

			if (next === this[back]) {
				// element was the last in the list
				this.pop();
				return true;
			}

			// element was somewhere in the middle;
			prev.next = next.next;
			next.next.prev = prev;

			this[size] -= 1;
			return true;
		}

		/**
		 * @todo override lastIndexOf
		 */
		lastIndexOf(element) {
			if (this.isEmpty) {
				return -1;
			}
			let node = this[back];
			let index = this.size - 1;
			while (node !== null) {
				if (this[cmpf](node.element, element) === 0) {
					return index;
				}
				node = node.prev;
				index -= 1;
			}
			return -1;
		}

		/** @inheritdoc */
		pop() {
			if (this[size] === 0) {
				throw new EmptyCollectionError('Can\'t pop on an empty LinkedList');
			}

			let element = this[back].element;

			if (this[size] === 1) {
				this[head] = null;
				this[back] = null;
			}
			else {
				this[back].prev.next = null;
				this[back] = this[back].prev;
			}

			this[size] -= 1;

			return element;
		}

		/** @inheritdoc */
		shift() {
			if (this[size] === 0) {
				throw new EmptyCollectionError('Can\'t shift on an empty LinkedList');
			}
			let element = this[head].element;
			if (this[size] === 1) {
				this[head] = null;
				this[back] = null;
			}
			else {
				this[head] = this[head].next;
				this[head].prev = null;
			}
			this[size] -= 1;
			return element;
		}

		/** @inheritdoc */
		unshift(element) {
			if (this[size] === 0) {
				return this.add(element);
			}
			var node = new DListNode(element);
			node.next = this[head];
			this[head].prev = node;
			this[head] = node;
			this[size] += 1;
			return this;
		}

		/**
		 * Same as {@link Collection#forEach} just starts at the tail of the list.
		 *
	 	 * @since 0.1.0
		 * @throws {TypeError} If cb is not a function.
	 	 *
	 	 * @param {forEachCallback} cb - The callback that will be applied to each element in the collection.
	 	 * @return {Collection} Returns this collection.
	 	 */
		reverseForEach(cb) {
			super._throwIfNotFunction(cb);
			let prev = this[back];
			while (prev !== null) {
				cb(prev.element);
				prev = prev.prev;
			}
			return this;
		}

		toString() {
			return super._toStr((e) => `${e} <-> `, 5);
		}
	}

	return DoubleLinkedList;

})(__LISTSYMBOLS.SIZE, __LISTSYMBOLS.HEAD, __LISTSYMBOLS.BACK, __LISTSYMBOLS.CMPF);
