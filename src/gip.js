

import LinkedList from "./collections/lists/linkedlist";
import DoubleLinkedList from "./collections/lists/doublelinkedlist";
import {__instantiate} from "./private/__utils";

/**
 * Gip - Entry Point for library
 * @namespace
 */
class Gip {
	/**
 	 * Returns a new linked list
 	 *
 	 * @param {E[]?} initializer - If an initializer is passed {@link Collection#addAll} will be called passing it the initializer
 	 * @param {cmpFtn?} - The comparison function that will be used to determine ordering and equality of elements in the collection
 	 * @return {LinkedList}
 	 */
	LinkedList(initializer=[], cmpFtn=null) {
		return __instantiate(LinkedList, initializer, cmpFtn);
	}
	/**
 	 * Returns a new double linked list
 	 *
 	 * @return {DoubleLinkedList}
 	 */
	DoubleLinkedList() {
		return __instantiate(DoubleLinkedList, initializer, cmpFtn);
	}
}

const gip = new Gip();

export default gip;
