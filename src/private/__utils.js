
/** @private */
export function __isArray(array) {
	if (typeof Array.isArray === 'function') {
		return Array.isArray(array);
	}
	return Object.prototype.toString.call(array) === '[object Array]';
}

/** @private */
export function __instantiate(clazz, initializer, cmpFtn) {
	if (typeof initializer === 'function') {
		[cmpFtn, initializer] = [initializer, []];
	}
	let collection = new clazz(cmpFtn);
	if (initializer.length > 0) {
		collection.addAll(...initializer);
	}
	return collection;
}
