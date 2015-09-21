"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _exceptions = require("./exceptions");

var ICollection = (function () {
	function ICollection() {
		_classCallCheck(this, ICollection);
	}

	_createClass(ICollection, [{
		key: "add",
		value: function add(element) {
			throw new _exceptions.UnsupportedOperationException();
		}
	}, {
		key: "contains",
		value: function contains(element) {
			throw new _exceptions.UnsupportedOperationException();
		}
	}, {
		key: "delete",
		value: function _delete(element) {
			throw new _exceptions.UnsupportedOperationException();
		}
	}, {
		key: "forEach",
		value: function forEach(Ftn) {
			throw new _exceptions.UnsupportedOperationException();
		}
	}, {
		key: "size",
		value: function size() {
			throw new _exceptions.UnsupportedOperationException();
		}
	}]);

	return ICollection;
})();

exports["default"] = ICollection;
module.exports = exports["default"];