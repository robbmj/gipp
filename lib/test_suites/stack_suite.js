module.exports = function (ctx) {

	describe("Stack Tests", function () {

		var stack;

		beforeEach(function() {
	    	stack = ctx.collection;
	  	});

		it('Should push() 1', function () {
			stack.push(1);
			expect(stack.peek()).toEqual(1);
			expect(stack.pop()).toEqual(1);
		});

		it('add(1) should be the same as push(1)', function () {
			stack.add(1);
			expect(stack.peek()).toEqual(1);
			expect(stack.pop()).toEqual(1);
		});

		it('addAll(1,2,3)', function () {
			stack.addAll(1,2,3);

			expect(stack.peek()).toEqual(3);
			expect(stack.pop()).toEqual(3);

			expect(stack.peek()).toEqual(2);
			expect(stack.pop()).toEqual(2);

			expect(stack.peek()).toEqual(1);
			expect(stack.pop()).toEqual(1);
		});

		it('pushAll(1,2,3)', function () {
			stack.pushAll(1,2,3);

			expect(stack.peek()).toEqual(3);
			expect(stack.pop()).toEqual(3);

			expect(stack.peek()).toEqual(2);
			expect(stack.pop()).toEqual(2);

			expect(stack.peek()).toEqual(1);
			expect(stack.pop()).toEqual(1);
		});

		it('Should Throw when peek() is called on an empty stack', function () {
			expect(stack.peek).toThrow();
		});

		it('Should Throw when pop() is called on an empty stack', function () {
			expect(stack.pop).toThrow();
		});

		it('Should Throw when delete() is called on an empty stack', function () {
			expect(stack.delete).toThrow();
		});

		it('Should return 2 when deleting the last element of the stack', function () {
			stack.pushAll(1,2,3);
			var ret = stack.delete(3);
			expect(ret).toEqual(true);
			expect(stack.pop()).toEqual(2);
		});


		it('Should be balanced', function () {
			var str = '(((())))()';
			for (var i = 0; i < str.length; i++) {
				s = str[i];
				if (s === '(') {
					stack.push(s);
				}
				else {
					stack.pop();
				}
			}
			expect(stack.isEmpty).toEqual(true);
		});

		it('Should not be balanced', function () {
			var str = '((((()))))((())';
			for (var i = 0; i < str.length; i++) {
				s = str[i];
				if (s === '(') {
					stack.push(s);
				}
				else {
					stack.pop();
				}
			}
			expect(stack.size).toEqual(1);
		});
	});
};
