
const __HEAPSYMBOLS = (() => {

	const SIZE = Symbol('SIZE');
	const HEAP = Symbol('HEAP');
	const CMPF = Symbol('CMPF');

	class __HEAPSYMBOLS {
		get SIZE() {
			return SIZE;
		}
		get HEAP() {
			return HEAP;
		}
		get CMPF() {
			return CMPF;
		}
	};

	return new __HEAPSYMBOLS();
}());

export default __HEAPSYMBOLS;
