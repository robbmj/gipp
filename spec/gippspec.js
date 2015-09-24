
describe('Gipp Object Tests', function () {

	var gipp = require('./../dist/gipp');

	it('Should return an empty collection', function () {
		var list = gipp.LinkedList();
		expect(list.isEmpty).toEqual(true);
	});

	it('Should return an empty collection', function () {
		var list = gipp.LinkedList(function () { return -1; });
		expect(list.isEmpty).toEqual(true);

		it('and have a custom comparison function', function () {
			list.add(1);
			expect(list.contains(1)).toEqual(false)
		});
	});

	it('Should contain 5 elements', function () {
		var list = gipp.LinkedList([1,2,3,4,5]);
		expect(list.size).toEqual(5);
	});

	it('Should contain 3 elements', function () {
		var list = gipp.LinkedList([1,2,3], function () { return -1; });
		expect(list.size).toEqual(3);

		it('and have a custom comparison function', function () {
			expect(list.lastIndexOf(3)).toEqual(-1)
		});
	});
});
