
import {ListNode} from "./listnode";
import IList from "./list.interface";
import {EmptyListException} from "./../exceptions";

export default (() => {

	let size = Symbol('size'),
		head = Symbol('head'),
		back = Symbol('back');

	console.log("Symbols:", size, head, back);

	return class LL extends IList {
		constructor() {
			super();
			this[size] = 0;
			this[head] = null;
			this[back] = null;
		}

		add(element) {
			var node = new ListNode(element);
			if (this[head] === null) {
				this[head] = node;
				this[back] = this[head];
			}
			else {
				this[back].next = node;
				this[back] = node;
			}
			this[size] += 1;
		}

		contains(element) {
			return this.indexOf(element) !== -1;
		}

		delete(element) {
			if (this[head].element === element) {
				this.shift();
				return true;
			}

			var next = this[head].next;
			var prev = this[head];

			while (next.element !== element) {
				prev = next;
				next = next.next;

				if (prev === null && next === null) {
					// element is not in the list
					return false;
				}
			}

			if (next === null) {
				// element was the last in the list
				this.pop();
				return true;
			}

			// element was somewhere in the middle;
			prev.next = next.next;
			this[size] -= 1;
			return true;
		}

		forEach(cb) {
			var next = this[head];
			while (next !== null) {
				cb(next.element);
				next = next.next;
			}
		}

		get size() {
			return this[size];
		}

		indexOf(element) {
			if (this[size] === 0) {
				return -1;
			}
			var i = 0;
			var next = this[head];
			while (next.element !== element) {
				next = next.next;
				i++;
				if (next === null) {
					return -1;
				}
			}
			return i;
		}

		lastIndexOf(element) {
			if (this[size] === 0) {
				return -1;
			}
			var i = 0;
			var lastIndex = -1;
			var next = this[head];
			while (next !== null) {
				if (next.element === element) {
					lastIndex = i;
				}
				i++;
			}
			return lastIndex;
		}

		push(element) {
			this.add(element);
		}

		/**
		 * Returns the last element in the list
		 */
		pop() {
			if (this[size] === 0) {
				throw new EmptyListException();
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

		shift() {
			if (this[size] === 0) {
				throw new EmptyListException();
			}
			var element = this[head].element;
			this[head] = this[head].next;
			this[size] -= 1;
			return element;
		}

		unshift(element) {
			var node = new ListNode(element);
			node.next = this[head];
			this[head] = node;
			this[size] += 1;
		}

		toString() {
			var s = "[";
			this.forEach(function (e) {
				s += e + " -> ";
			});
			if (s.length > 1) {
				s = s.substring(0, s.length - 4);
			}
			return s + "]";
		}
	};
})();


