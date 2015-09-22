"use strict";

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _collectionsListsLinkedlist = require("./collections/lists/linkedlist");

var _collectionsListsLinkedlist2 = _interopRequireDefault(_collectionsListsLinkedlist);

var gip = (function () {
	function gip() {
		_classCallCheck(this, gip);
	}

	_createClass(gip, [{
		key: "LinkedList",
		value: function LinkedList() {
			return new _collectionsListsLinkedlist2["default"]();
		}
	}]);

	return gip;
})();

exports["default"] = new gip();
module.exports = exports["default"];