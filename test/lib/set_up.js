
module.exports = function (suite, gipp, clazz) {
	var ctx = {};

	beforeEach(function() {
    	ctx.list = gipp[clazz]();
  	});

  	suite(ctx);
}
