
const __LISTSYMBOLS = (() => {

	const SIZE = Symbol('SIZE');
	const HEAD = Symbol('HEAD');
	const BACK = Symbol('BACK');
	const CMPF = Symbol('CMPF');

	class __LISTSYMBOLS {
		get SIZE() {
			return SIZE;
		}
		get HEAD() {
			return HEAD;
		}
		get BACK() {
			return BACK;
		}
		get CMPF() {
			return CMPF;
		}
	};

	return new __LISTSYMBOLS();
}());

export default __LISTSYMBOLS;
