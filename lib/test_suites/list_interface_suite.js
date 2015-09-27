
module.exports = function (ctx) {

	describe("LinkedList Tests", function () {

		var list;

		beforeEach(function() {
	    	list = ctx.collection;
	  	});

		describe('Delete Tests', function () {
			it('Delete should return true if element is in the middle of the list', function () {
				list.add(1);
				list.add(2);
				list.add(3);
				expect(list.delete(2)).toEqual(true);
				expect(list.size).toEqual(2);
			});
		});



		describe('IndexOf Tests', function () {

			it('Should return -1', function () {
				expect(list.size).toEqual(0);
				expect(list.indexOf(1)).toEqual(-1);
			});

			it('Should return -1', function () {
				list.add(4);
				expect(list.size).toEqual(1);
				expect(list.indexOf(1)).toEqual(-1);
			});

			it('Should return 0', function () {
				list.add(4);
				expect(list.size).toEqual(1);
				expect(list.indexOf(4)).toEqual(0);
			});

			it('Should return 1', function () {
				list.add(1);
				list.add(4);
				expect(list.size).toEqual(2);
				expect(list.indexOf(4)).toEqual(1);
			});
		});

		describe('LastIndexOf Tests', function () {
			it('Should return -1', function () {
				expect(list.lastIndexOf(0)).toEqual(-1);
			});

			it('Should return -1', function () {
				list.add(1);
				expect(list.lastIndexOf(0)).toEqual(-1);
			});

			it('Should return 0', function () {
				list.add(1);
				expect(list.lastIndexOf(1)).toEqual(0);
			});

			it('Should return 1', function () {
				list.add(1);
				list.add(1);
				expect(list.lastIndexOf(1)).toEqual(1);
			});
		});

		describe('Push - Pop tests', function () {

			it('An empty list should throw an exception', function () {
				expect(list.pop).toThrow();
			});

			it('Should return 0', function () {
				list.push(0);
				expect(list.size).toEqual(1);
				expect(list.pop()).toEqual(0);
				expect(list.size).toEqual(0);
			});

			it('Should return 1', function () {
				list.push(0);
				list.push(1);
				expect(list.size).toEqual(2);
				expect(list.pop()).toEqual(1);
				expect(list.size).toEqual(1);
			});

			it('An empty list should throw an exception', function () {
				expect(list.pop).toThrow();
			});
		});

		describe('PushAll Tests', function () {
			var i = 0;
			var cb = function (order) {
				i = 0;
				return function (e) {
					expect(e).toEqual(order[i++]);
				};
			};

			it('Should add elements to the end of the list', function () {
				var a = [0,1,2,3,4,5];
				list.add(0);
				list.pushAll(1,2,3,4,5);
				list.forEach(cb(a));
				expect(i).toEqual(a.length);
			});
		});

		describe('Shift - Unshift Tests', function () {

			it('Should throw an exception if the list is empty', function () {
				expect(list.shift).toThrow();
			});

			it('Shift should return 0', function () {
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
		});

		describe('UnshiftAll Tests', function () {
			var i = 0;
			var cb = function (order) {
				i = 0;
				return function (e) {
					expect(e).toEqual(order[i++]);
				};
			};

			it('Should add element to the front of the list in reverse order', function () {
				var a = [0,1,2,3,4,5, 6];
				list.add(6);
				list.unshiftAll(0,1,2,3,4,5);
				list.forEach(cb(a));
				expect(i).toEqual(a.length);
			});
		});
	});
}
