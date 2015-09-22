
import {ListNode} from "./listnode";
import IList from "./list.interface";
import {EmptyListException} from "./../exceptions";

export default (() => {

	let size = Symbol('size'),
		head = Symbol('head'),
		back = Symbol('back');

	return class LinkedList extends IList {
		/**
		 * Creates an empty singly linked list
		 *
		 * Time Complexity O(1)
		 * Space Complexity O(1)
		 */
		constructor() {
			super();
			this[size] = 0;
			this[head] = null;
			this[back] = null;
		}

		/**
		 * ${super.documentation()}
		 *
		 * Time Complexity O(1)
		 * Space Complexity O(1)
		 */
		add(element) {
			let node = new ListNode(element);
			if (this[head] === null) {
				this[head] = node;
				this[back] = node;
			}
			else {
				this[back].next = node;
				this[back] = node;
			}
			this[size] += 1;
			return this;
		}

		/**
		 * ${super.documentation()}
		 *
		 * Time Complexity O(n)
		 * Space Complexity O(1)
		 */
		addAll(...elements) {
			let i = 0, len = elements.length;
			for (; i < len; i += 1) {
				this.add(elements[i]);
			}
			return this;
		}

		/**
		 * ${super.documentation()}
		 *
		 * Time Complexity O(n)
		 * Space Complexity O(1)
		 */
		contains(element) {
			return this.indexOf(element) !== -1;
		}

		/**
		 * ${super.documentation()}
		 *
		 * Time Complexity O(n)
		 * Space Complexity O(1)
		 */
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

			while (next.element !== element) {
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
			this[size] -= 1;
			return true;
		}

		/**
		 * ${super.documentation()}
		 *
		 * Time Complexity O(n)
		 * Space Complexity O(1)
		 */
		forEach(cb) {
			super._throwIfNotFunction(cb);
			let next = this[head];
			while (next !== null) {
				cb(next.element);
				next = next.next;
			}
			return this;
		}

		/**
		 * ${super.documentation()}
		 *
		 * Time Complexity O(n)
		 * Space Complexity O(n)
		 */
		map(cb) {
			super._throwIfNotFunction(cb);
			let newList = new LinkedList();
			let next = this[head];
			while (next !== null) {
				if (cb(next.element)) {
					newList.add(next.element);
				}
				next = next.next;
			}
			return newList;
		}

		/**
		 * ${super.documentation()}
		 *
		 * Time Complexity O(1)
		 * Space Complexity O(1)
		 */
		get size() {
			return this[size];
		}

		/**
		 * ${super.documentation()}
		 *
 		 * Time Complexity: O(n)
 		 * Space Complexity: O(1)
		 */
		indexOf(element) {
			if (this[size] === 0) {
				return -1;
			}
			let i = 0;
			let next = this[head];
			while (next.element !== element) {
				next = next.next;
				i++;
				if (next === null) {
					return -1;
				}
			}
			return i;
		}

		/**
		 * ${super.documentation()}
		 *
 		 * Time Complexity: O(n)
 		 * Space Complexity: O(1)
		 */
		lastIndexOf(element) {
			if (this[size] === 0) {
				return -1;
			}
			let i = 0;
			let lastIndex = -1;
			let next = this[head];
			while (next !== null) {
				if (next.element === element) {
					lastIndex = i;
				}
				i++;
				next = next.next;
			}
			return lastIndex;
		}

		/**
		 * ${super.documentation()}
		 *
		 * Time Complexity O(1)
		 * Space Complexity O(1)
		 */
		pop() {
			if (this[size] === 0) {
				throw new EmptyCollectionError('Can\'t pop on an empty LinkedList');
			}
			if (this[size] === 1) {
				var ret = this[head].element;
				this[head] = null;
				this[size] = 0;
				return ret;
			}
			var last = this[back];
			var next = this[head];
			while (next.next !== last) {
				next = next.next;
			}
			this.last = next;
			next.next = null;
			this[size] -= 1;
			return last.element;
		}

		/**
		 *${super.documentation()}
		 *
		 * Time Complexity O(1)
		 * Space Complexity O(1)
		 */
		push(element) {
			return this.add(element);
		}

		/**
		 * ${super.documentation()}
		 *
		 * Time Complexity O(n)
		 * Space Complexity O(1)
		 */
		pushAll(...elements) {
			return this.addAll(...elements);
		}

		/**
		 * ${super.documentation()}
		 *
		 * Time Complexity O(1)
		 * Space Complexity O(1)
		 */
		shift() {
			if (this[size] === 0) {
				throw new EmptyCollectionError('Can\'t shift on an empty LinkedList');
			}
			let element = this[head].element;
			this[head] = this[size] === 1 ? null : this[head].next;
			this[size] -= 1;
			return element;
		}

		/**
		 * ${super.documentation()}
		 *
		 * Time Complexity O(1)
		 * Space Complexity O(1)
		 */
		unshift(element) {
			var node = new ListNode(element);
			node.next = this[head];
			this[head] = node;
			this[size] += 1;
			return this;
		}

		/**
		 * ${super.documentation()}
		 *
		 * Time Complexity O(n)
		 * Space Complexity O(1)
		 */
		unshiftAll(...elements) {
			let i = elements.length-1;
			for (; i >= 0; i -= 1) {
				this.unshift(elements[i]);
			}
			return this;
		}

		/**
		 * Returns a string representation of the collection.
		 *
		 * Time Complexity O(n)
		 * Space Complexity O(n)
		 */
		toString() {
			var s = "[";
			this.forEach((e) => s += `${e} -> `);
			if (s.length > 1) {
				s = s.substring(0, s.length - 4);
			}
			return s + "]";
		}
	};
})();
