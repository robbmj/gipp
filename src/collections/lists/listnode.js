
export class ListNode {

	constructor(element) {
		this.element = element;
		this.next = null;
	}

	get next() {
		return this._next;
	}

	set next(next) {
		this._next = next;
	}

	get element() {
		return this._element;
	}

	set element(element) {
		this._element = element;
	}
}

export class DListNode extends ListNode {

	constructor(element) {
		super(element);
		this.prev = null;
	}

	get prev() {
		return this._prev;
	}

	set prev(prev) {
		this._prev = prev;
	}
}
