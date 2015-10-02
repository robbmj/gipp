
module.exports = function (suites, gipp, clazz, cmpFtn) {
	var ctx = {};
	cmpFtn = cmpFtn || null;
	beforeEach(function() {
		ctx.collection = gipp[clazz]([], cmpFtn);
 	});

	for (var i = 0; i < suites.length; i++) {
		suites[i](ctx);
	}
}
