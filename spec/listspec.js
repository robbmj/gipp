


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

		it('An empty list should throw an exception', function () {
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

		it('An empty list should throw an exception', function () {
			expect(list.pop).toThrow();
		});
	});

	describe('Shift - Unshift Tests', function () {

		it('An empty list should throw an exception', function () {
			expect(list.shift).toThrow();
		});

		it('Should return 0', function () {
			list.unshift(0);
			expect(list.size).toEqual(1);
			expect(list.shift()).toEqual(0);
			expect(list.size).toEqual(0);
		});

		it('Should return 2', function () {
			list.unshift(1);
			list.unshift(2);
			expect(list.size).toEqual(2);
			expect(list.shift()).toEqual(2);
			expect(list.size).toEqual(1);
		});

		it('An empty list should throw an exception', function () {
			expect(list.shift).toThrow();
		});
	});

	describe('IndexOf - LastIndexOf tests', function () {

		it('IndexOf Should return -1', function () {
			expect(list.size).toEqual(0);
			expect(list.indexOf(1)).toEqual(-1);
		});

		it('IndexOf Should return -1', function () {
			list.add(4);
			expect(list.size).toEqual(1);
			expect(list.indexOf(1)).toEqual(-1);
		});

		it('IndexOf Should return 0', function () {
			list.add(4);
			expect(list.size).toEqual(1);
			expect(list.indexOf(4)).toEqual(0);
		});

		it('IndexOf Should return 1', function () {
			list.add(1);
			list.add(4);
			expect(list.size).toEqual(2);
			expect(list.indexOf(4)).toEqual(1);
		});

		it('LastIndexOf Should return -1', function () {
			expect(list.lastIndexOf(0)).toEqual(-1);
		});

		it('LastIndexOf Should return -1', function () {
			list.add(1);
			expect(list.lastIndexOf(0)).toEqual(-1);
		});

		it('LastIndexOf Should return 0', function () {
			list.add(1);
			expect(list.lastIndexOf(1)).toEqual(0);
		});

		it('LastIndexOf Should return 1', function () {
			list.add(1);
			list.add(1);
			expect(list.lastIndexOf(1)).toEqual(1);
		});
	});

	describe('Contains Tests', function () {
		it('Contains should return false', function () {
			expect(list.contains(1)).toEqual(false);
		});

		it('Contains should return false', function () {
			list.add(0);
			expect(list.contains(1)).toEqual(false);
		});

		it('Contains should return false', function () {
			list.add(0);
			list.add(0);
			expect(list.contains(1)).toEqual(false);
		});

		it('Contains should return true', function () {
			list.add(1);
			expect(list.contains(1)).toEqual(true);
		});
		it('Contains should return true', function () {
			list.add(0);
			list.add(1);
			expect(list.contains(1)).toEqual(true);
		});
	});

	describe('ForEach Tests', function () {
		var i = 0;
		var cb = function (order) {
			i = 0;
			return function (e) {
				expect(e).toEqual(order[i++]);
			};
		};

		it('ForEach - AddAll', function () {
			var a = [0,1,2,3,4,5];
			list.addAll(0,1,2,3,4,5);
			list.forEach(cb(a));
			expect(i).toEqual(a.length);
		});

		it('ForEach - PushAll', function () {
			var a = [0,1,2,3,4,5];
			list.pushAll(0,1,2,3,4,5);
			list.forEach(cb(a));
			expect(i).toEqual(a.length);
		});

		it('ForEach - UnshiftAll', function () {
			var a = [0,1,2,3,4,5];
			list.unshiftAll(0,1,2,3,4,5);
			list.forEach(cb(a));
			expect(i).toEqual(a.length);
		});
	});

	describe('Delete Tests', function () {
		it('Delete should throw an exception if the list is empty', function () {
			expect(list.delete).toThrow();
		});

		it('Delete should return false if element is not in the list', function () {
			list.add(0);
			expect(list.delete(1)).toEqual(false);
		});

		it('Delete should return true and list should be empty when deleting the first element in the list and list size = 1', function () {
			list.add(1);
			expect(list.delete(1)).toEqual(true);
			expect(list.size).toEqual(0);
		});

		it('Delete should return true if element is the last in the list', function () {
			list.add(1);
			list.add(2);
			expect(list.delete(2)).toEqual(true);
			expect(list.size).toEqual(1);
		});

		it('Delete should return true if element is in the middle of the list', function () {
			list.add(1);
			list.add(2);
			list.add(3);
			expect(list.delete(2)).toEqual(true);
			expect(list.size).toEqual(2);
		});
	});

	describe('Map Tests', function () {
		var evenOnly = function (e) {
			return (e & 1) === 0;
		};

		it('Map should throw a TypeError if not passed a function', function () {
			expect(list.map).toThrowError(TypeError);
		});

		it('Map should return a list of even numbers', function () {
			list.addAll(0,1,2,3,4,5,6,7,8,9);
			var newList = list.map(evenOnly);

			newList.forEach(function (e) {
				expect(e & 1).toEqual(0);
			});
		});
	});
});
