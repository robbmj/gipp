
import Collection from './../collection.interface';
import LinkedList from './../lists/linkedlist';
import {EmptyCollectionError} from "./../exceptions";

const Stack = (() => {

	const list = Symbol('list');

	/**
	 * @classdesc A Stack is a Last In First Out (LIFO) data structure.
	 *
	 * This Stack pushes elements on to the head of the stack, the Stack also
	 * pops elements from the head of the stack.
	 *
	 * @implements {Collection}
	 */
	class Stack extends Collection {
		/**
		 * Creates an empty stack
		 *
		 * @param {CmpFtn?} - If no comparison function is passed then the [default comparison function]{@link Collection#cmpFtn} is used.
		 */
		constructor(cmpFtn=null) {
			super();
			/**
			 * @private
			 *
			 * This stack is implmented with a sigly linked list.
			 * All add() and push(), pop() and peek() operations actually
			 * work in the front of the list.
			 */
			this[list] = new LinkedList(cmpFtn);
		}

		get size() {
			return this[list].size;
		}

		get isEmpty() {
			return this[list].isEmpty;
		}

		*[Symbol.iterator]() {
			yield * this[list];
		}

		add(element) {
			this[list].unshift(element);
			return this;
		}

		addAll(...elements) {
			for (let e of elements) {
				this[list].unshift(e);
			}
			return this;
		}

		contains(element) {
			return this[list].contains(element);
		}

		delete(element) {
			if (this.isEmpty) {
				throw new EmptyCollectionError('Can\'t delete() from an empty stack');
			}
			return this[list].delete(element);
		}

		forEach(cb) {
			this[list].forEach(cb);
		}

		map(cb) {
			let newList = this[list].map(cb);
			let newStack = new Stack();
			newStack[list] = newList;
			return newStack;
		}

		/**
		 * Returns but does not remove the head of the stack
		 *
		 * @thorws {EmptyCollectionError} If the stack is empty
		 *
		 * @return {E} The head of the stack
		 */
		peek() {
			for (let e of this[list]) {
				return e;
			}
			throw new EmptyCollectionError('Can\'t peek() on an empty stack');
		}

		/**
		 * Returns and removes the head of the stack
		 *
		 * @thorws {EmptyCollectionError} If the stack is empty
		 *
		 * @return {E} The head element of the stack
		 */
		pop() {
			if (this.isEmpty) {
				throw new EmptyCollectionError('Can\'t pop() from an empty stack');
			}
			return this[list].shift();
		}

		/**
		 * adds an elemnt to the head of the stack
		 *
		 * @param {E} element - The element to append to the stack
		 * @return {Stack}
		 */
		push(element) {
			return this.add(element);
		}

		/**
		 * Pushes each element on to the head of the stack
		 *
		 * @param {...E} elements The elements to push on to the stack
		 * @return {Stack}
		 */
		pushAll(...elements) {
			this.addAll(...elements);
			return this;
		}
	}

	return Stack;
})();

export default Stack;
