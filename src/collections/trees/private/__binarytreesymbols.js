
const __BINARYTREESYMBOLS = (() => {

	const SIZE = Symbol('SIZE');
	const ROOT = Symbol('ROOT');
	const CMPF = Symbol('CMPF');

	class __BINARYTREESYMBOLS {
		get SIZE() {
			return SIZE;
		}
		get ROOT() {
			return ROOT;
		}
		get CMPF() {
			return CMPF;
		}
	};

	return new __BINARYTREESYMBOLS();
}());

export default __BINARYTREESYMBOLS;
