
module.exports = function (suites, gipp, clazz) {
	var ctx = {};

	beforeEach(function() {
    	ctx.collection = gipp[clazz]();
  	});

	for (var i = 0; i < suites.length; i++) {
		suites[i](ctx);
	}
}
