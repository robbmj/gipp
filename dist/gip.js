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

var _private__utils = require("./private/__utils");

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
    	 * @param {E[]?} initializer - If an initializer is passed {@link Collection#addAll} will be called passing it the initializer
    	 * @param {cmpFtn?} - The comparison function that will be used to determine ordering and equality of elements in the collection
    	 * @return {LinkedList}
    	 */
    value: function LinkedList() {
      var initializer = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
      var cmpFtn = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

      return (0, _private__utils.__instantiate)(_collectionsListsLinkedlist2["default"], initializer, cmpFtn);
    }

    /**
    	 * Returns a new double linked list
    	 *
    	 * @return {DoubleLinkedList}
    	 */
  }, {
    key: "DoubleLinkedList",
    value: function DoubleLinkedList() {
      return (0, _private__utils.__instantiate)(_collectionsListsDoublelinkedlist2["default"], initializer, cmpFtn);
    }
  }]);

  return Gip;
})();

var gip = new Gip();

exports["default"] = gip;
module.exports = exports["default"];