
var getGipp = (function () {

	var path = require('path');
	var cwd = path.resolve(process.cwd());

	var buildDir = path.normalize(cwd + '/../build/');

	return function (gipp_path) {
		return require(buildDir + gipp_path);
	}
}());

module.exports = {
	transpiled: getGipp('gipp-transpiled'),
	bundle: getGipp('gipp-bundle/gipp.bundle'),
	min: getGipp('gipp-min-bundle/gipp.bundle')
};
