


describe("LinkedList Tests", function () {

	var gip = require('./../dist/gip');
	var ex = require('./../dist/collections/exceptions').EmptyListException;
	var list;

	beforeEach(function() {
    	list = gip.LinkedList();
  	});

	it('Should be empty', function () {
		expect(list.size).toEqual(0);
	});

	it('Should not be empty', function () {
		list.add(0);
		expect(list.size).toEqual(1);
	});

	describe('Push - Pop tests', function () {

		it('An empty list hould throw an exception', function () {
			expect(list.pop).toThrow();
		});

		it('Should return 0', function () {
			list.add(0);
			expect(list.size).toEqual(1);
			expect(list.pop()).toEqual(0);
			expect(list.size).toEqual(0);
		});

		it('Should return 1', function () {
			list.add(0);
			list.add(1);
			expect(list.size).toEqual(2);
			expect(list.pop()).toEqual(1);
			expect(list.size).toEqual(1);
		});
	});

	describe('Shift - Unsift Tests', function () {

	});

});
