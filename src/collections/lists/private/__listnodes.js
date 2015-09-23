
let ListNode = (() => {

	let elem = Symbol('elem'),
		next = Symbol('next');

	return class ListNode {
		constructor(element) {
			this[elem] = element
			this[next] = null;
		}

		get element() {
			return this[elem];
		}

		set element(element) {
			this[elem] = element;
		}

		get next() {
			return this[next];
		}

		set next(node) {
			this[next] = node;
		}
	};
})();

let DListNode = (() => {

	let prev = Symbol('prev');

	return class DListNode extends ListNode {
		constructor(element) {
			super(element);
			this[prev] = null;
		}

		get prev() {
			return this[prev];
		}

		set prev(node) {
			this[prev] = node;
		}
	};

})();

export default {ListNode: ListNode, DListNode: DListNode};
