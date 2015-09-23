"use strict";

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _collectionsListsLinkedlist = require("./collections/lists/linkedlist");

var _collectionsListsLinkedlist2 = _interopRequireDefault(_collectionsListsLinkedlist);

var _collectionsListsDoublelinkedlist = require("./collections/lists/doublelinkedlist");

var _collectionsListsDoublelinkedlist2 = _interopRequireDefault(_collectionsListsDoublelinkedlist);

/**
 * Gip - Entry Point for library
 * @namespace
 */

var Gip = (function () {
  function Gip() {
    _classCallCheck(this, Gip);
  }

  _createClass(Gip, [{
    key: "LinkedList",

    /**
    	 * Returns a new linked list
    	 *
    	 * @return {LinkedList}
    	 */
    value: function LinkedList() {
      return new _collectionsListsLinkedlist2["default"]();
    }

    /**
    	 * Returns a new double linked list
    	 *
    	 * @return {DoubleLinkedList}
    	 */
  }, {
    key: "DoubleLinkedList",
    value: function DoubleLinkedList() {
      return new _collectionsListsDoublelinkedlist2["default"]();
    }
  }]);

  return Gip;
})();

var gip = new Gip();

exports["default"] = gip;
module.exports = exports["default"];