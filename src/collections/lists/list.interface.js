
import ICollection from "./../collection.interface";
import {UnsupportedOperationException} from "./../exceptions";

export default class IList extends ICollection {
	indexOf(element) {
		throw new UnsupportedOperationException();
	}

	lastIndexOf(element) {
		throw new UnsupportedOperationException();
	}

	push(element) {
		throw new UnsupportedOperationException();
	}

	pop() {
		throw new UnsupportedOperationException();
	}

	shift() {
		throw new UnsupportedOperationException();
	}

	unshift(element) {
		throw new UnsupportedOperationException();
	}
}
