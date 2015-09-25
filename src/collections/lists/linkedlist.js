
import {ListNode} from "./private/__listnodes";
import List from "./list.interface";
import Collection from "./../collection.interface";
import {EmptyListException} from "./../exceptions";
import __LISTSYMBOLS from './private/__listsymbols';

export default ((size, head, back, cmpf) => {

	 /**
	  * @classdesc Singly Linked List
	  * @implements {List}
	  */
	class LinkedList extends List {
		// Time Complexity: O(1), Space Complexity: O(1)
		/**
		 * Creates an empty singly linked list
		 *
		 * @param {cmpFtn?} - If no comparison function is passed then the [default comparison function]{@link Collection#cmpFtn} is used.
		 */
		constructor(cmpFtn=null) {
			super();
			this[size] = 0;
			this[head] = null;
			this[back] = null;
			this[cmpf] = cmpFtn || Collection.cmpFtn;
		}

		// Time Complexity: O(1), Space Complexity: O(1)
		get size() {
			return this[size];
		}

		// Time Complexity: O(1), Space Complexity: O(1)
		get isEmpty() {
			return this[size] === 0;
		}

		// Time Complexity: O(n) where n is the size of the list, Space Complexity: O(1)
		*[Symbol.iterator]() {
			let next = this[head];
			while (next != null) {
				yield next.element;
			}
		}

		// Time Complexity: O(1), Space Complexity: O(1)
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

		// Time Complexity: O(n) where n is the size of elements, Space Complexity: O(1)
		addAll(...elements) {
			let i = 0, len = elements.length;
			for (; i < len; i += 1) {
				this.add(elements[i]);
			}
			return this;
		}

		// Time Complexity: O(n) where n is the size of the list, Space Complexity: O(1)
		contains(element) {
			return this.indexOf(element) !== -1;
		}

		// Time Complexity: O(n) where n is the size of the list, Space Complexity: O(1)
		delete(element) {
			if (this[size] === 0) {
				throw new EmptyCollectionError('Can\'t delete from an empty LinkedList');
			}

			if (this[cmpf](this[head].element, element) === 0) {
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
				prev.next = null;
				this[size] -= 1;
				return true;
			}

			// element was somewhere in the middle;
			prev.next = next.next;
			this[size] -= 1;
			return true;
		}

		// Time Complexity: O(n) where n is the size of the list, Space Complexity: O(1)
		forEach(cb) {
			super._throwIfNotFunction(cb);
			let next = this[head];
			while (next !== null) {
				cb(next.element);
				next = next.next;
			}
			return this;
		}

		// Time Complexity: O(n) where n is the size of the list, Space Complexity: O(n) where n is the size of the list
		map(cb) {
			super._throwIfNotFunction(cb);
			let newList = new LinkedList(this[cmpf]);
			let next = this[head];
			while (next !== null) {
				if (cb(next.element)) {
					newList.add(next.element);
				}
				next = next.next;
			}
			return newList;
		}

		// Time Complexity: O(n) where n is the size of the list, Space Complexity: O(1)
		indexOf(element) {
			if (this[size] === 0) {
				return -1;
			}
			let i = 0;
			let next = this[head];
			while (this[cmpf](next.element, element) !== 0) {
				next = next.next;
				i++;
				if (next === null) {
					return -1;
				}
			}
			return i;
		}

		// Time Complexity: O(n) where n is the size of the list, Space Complexity: O(1)
		lastIndexOf(element) {
			if (this[size] === 0) {
				return -1;
			}
			let i = 0;
			let lastIndex = -1;
			let next = this[head];
			while (next !== null) {
				if (this[cmpf](next.element, element) === 0) {
					lastIndex = i;
				}
				i++;
				next = next.next;
			}
			return lastIndex;
		}

		// Time Complexity: O(n) where n is the size of the list, Space Complexity: O(1)
		pop() {
			if (this[size] === 0) {
				throw new EmptyCollectionError('Can\'t pop on an empty LinkedList');
			}
			if (this[size] === 1) {
				var ret = this[head].element;
				this[head] = null;
				this[back] = null;
				this[size] = 0;
				return ret;
			}
			var last = this[back];
			var next = this[head];
			while (next.next !== last) {
				next = next.next;
			}
			this[back] = next;
			next.next = null;
			this[size] -= 1;
			return last.element;
		}

		// Time Complexity: O(1), Space Complexity: O(1)
		push(element) {
			return this.add(element);
		}

		// Time Complexity: O(n) where n is the size of elements, Space Complexity: O(1)
		pushAll(...elements) {
			return this.addAll(...elements);
		}

		// Time Complexity: O(1), Space Complexity: O(1)
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
				this[head] = this[head].next;;
			}

			this[size] -= 1;
			return element;
		}

		// Time Complexity: O(1), Space Complexity: O(1)
		unshift(element) {
			if (this[size] === 0) {
				return this.add(element);
			}
			var node = new ListNode(element);
			node.next = this[head];
			this[head] = node;
			this[size] += 1;
			return this;
		}

		// Time Complexity: O(1), Space Complexity: O(1)
		unshiftAll(...elements) {
			let i = elements.length-1;
			for (; i >= 0; i -= 1) {
				this.unshift(elements[i]);
			}
			return this;
		}

		// Time Complexity: O(n) where n is the size of the list, Space Complexity: O(n) where n is the size of the list
		/**
		 * Returns a string representation of the collection.
		 *
		 * @return {String} A string representation of the collection.
		 */
		toString() {
			return this._toStr((e) => `${e} -> `);
		}

		_toStr(cb, trimBy=4) {
			var s = "[";
			this.forEach((e) => { s += cb(e); });
			if (s.length > 1) {
				s = s.substring(0, s.length - trimBy);
			}
			return s + "]";
		}
	}

	return LinkedList;

})(__LISTSYMBOLS.SIZE, __LISTSYMBOLS.HEAD, __LISTSYMBOLS.BACK, __LISTSYMBOLS.CMPF);
