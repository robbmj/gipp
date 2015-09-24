

/**
 * @global
 */
"use strict";

var _get = require("babel-runtime/helpers/get")["default"];

var _inherits = require("babel-runtime/helpers/inherits")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var UnimplementedError = (function (_Error) {
	_inherits(UnimplementedError, _Error);

	function UnimplementedError(method) {
		_classCallCheck(this, UnimplementedError);

		_get(Object.getPrototypeOf(UnimplementedError.prototype), "constructor", this).call(this, "This is a bug in gipp please file a bug report (including the stack trace) to (URL): " + method + " is not implemented");
	}

	/**
  * @global
  */
	return UnimplementedError;
})(Error);

var EmptyCollectionError = (function (_Error2) {
	_inherits(EmptyCollectionError, _Error2);

	function EmptyCollectionError(msg) {
		_classCallCheck(this, EmptyCollectionError);

		_get(Object.getPrototypeOf(EmptyCollectionError.prototype), "constructor", this).call(this, msg);
	}

	return EmptyCollectionError;
})(Error);

exports["default"] = {
	UnimplementedError: UnimplementedError,
	EmptyCollectionError: EmptyCollectionError
};
module.exports = exports["default"];