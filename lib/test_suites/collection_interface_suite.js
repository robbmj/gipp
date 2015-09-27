
module.exports = function (ctx) {

	describe('Collection Interface Tests', function () {

		var collection;

		beforeEach(function () {
			collection = ctx.collection;
		});

		describe('IsEmpty Tests', function () {
			it('Sould be empty', function () {
				expect(collection.isEmpty).toEqual(true);
			});

			it('Sould not be empty', function () {
				collection.add(1);
				expect(collection.isEmpty).toEqual(false);
			});

			it('Sould be empty', function () {
				collection.add(1);
				collection.delete(1);
				expect(collection.isEmpty).toEqual(true);
			});
		});


		describe('Add Tests', function () {
			it('Should have 3 elements', function () {
				collection.add(1).add(2).add(3);
				expect(collection.size).toEqual(3);
			});

			it('Should have 2 elements', function () {
				collection.add(1);
				collection.add(2);
				expect(collection.size).toEqual(2);
			});
		});

		describe('AddAll Tests', function () {
			it('Should have 3 elements', function () {
				collection.addAll(1,2,3);
				expect(collection.size).toEqual(3);
			});

			it('Should have 0 elements', function () {
				collection.addAll(1);
				expect(collection.size).toEqual(1);
			});
		});

		describe('Contains Tests', function () {
			it('Contains should return false', function () {
				expect(collection.contains(1)).toEqual(false);
			});

			it('Contains should return false', function () {
				collection.add(0);
				expect(collection.contains(1)).toEqual(false);
			});

			it('Contains should return false', function () {
				collection.add(0);
				collection.add(0);
				expect(collection.contains(1)).toEqual(false);
			});

			it('Contains should return true', function () {
				collection.add(1);
				expect(collection.contains(1)).toEqual(true);
			});

			it('Contains should return true', function () {
				collection.add(0);
				collection.add(1);
				expect(collection.contains(1)).toEqual(true);
			});
		});

		describe('Delete Tests', function () {
			it('Should throw an exception if the collection is empty', function () {
				expect(collection.delete).toThrow();
			});

			it('Should return false if element is not in the collection', function () {
				collection.add(0);
				expect(collection.delete(1)).toEqual(false);
			});

			it('Should return false if element is not in the collection and size should remain the same', function () {
				collection.add(0);
				expect(collection.delete(1)).toEqual(false);
				expect(collection.size).toEqual(1);
			});

			it('Should return true if the element is in the collection', function () {
				collection.add(1).add(2);
				expect(collection.delete(1)).toEqual(true);
				expect(collection.size).toEqual(1);
			});

			it('Should return true and collection should be empty when deleting the only element in the collection', function () {
				collection.add(1);
				expect(collection.delete(1)).toEqual(true);
				expect(collection.size).toEqual(0);
			});
		});

		describe('ForEach Tests', function () {
			var timesInvoked = 0;

			var cb = function (order) {
				var map = {};

				for (var i = 0; i < order.length; i++) {
					map[order[i]] = order[i];
				}

				timesInvoked = 0;

				return function (e) {
					timesInvoked++;
					expect(map[e]).toEqual(e);
				};
			};

			it('ForEach - AddAll', function () {
				collection.addAll(0,1,2,3,4,5);
				collection.forEach(cb([0,1,2,3,4,5]));
				expect(timesInvoked).toEqual(6);
			});
		});

		describe('Map Tests', function () {
			var evenOnly = function (e) {
				return (e & 1) === 0;
			};

			it('Map should throw a TypeError if not passed a function', function () {
				expect(collection.map).toThrowError(TypeError);
			});

			it('Map should return a list of even numbers', function () {
				collection.addAll(0,1,2,3,4,5,6,7,8,9);
				var newCollection = collection.map(evenOnly);

				newCollection.forEach(function (e) {
					expect(e & 1).toEqual(0);
				});
			});
		});
	});
};
