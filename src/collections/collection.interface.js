
import {UnsupportedOperationException} from "./exceptions";

export default class ICollection {

	add(element) {
		throw new UnsupportedOperationException();
	}

	contains(element) {
		throw new UnsupportedOperationException();
	}

	delete(element) {
		throw new UnsupportedOperationException();
	}

	forEach(Ftn) {
		throw new UnsupportedOperationException();
	}

	size() {
		throw new UnsupportedOperationException();
	}
}
