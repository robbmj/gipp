
module.exports = function orderExpected(order, ftn) {
	var i = 0;
	return function (e) {
		expect(e).toEqual(order[i++]);
		if (typeof ftn === 'function') {
			return ftn(e);
		}
	}
};
