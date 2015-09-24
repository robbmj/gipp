

import LinkedList from "./collections/lists/linkedlist";
import DoubleLinkedList from "./collections/lists/doublelinkedlist";
import {__instantiate} from "./private/__utils";

/**
 * Gipp - Entry Point for library
 * @namespace
 */
class Gipp {
	/**
 	 * Returns a new linked list
 	 *
 	 * @param {E[]?} initializer - If an initializer is passed {@link Collection#addAll} will be called passing it the initializer.
 	 * @param {cmpFtn?} - The comparison function that will be used to determine ordering and equality of elements in the collection.
 	 * @return {LinkedList}
 	 */
	LinkedList(initializer=[], cmpFtn=null) {
		return __instantiate(LinkedList, initializer, cmpFtn);
	}
	/**
 	 * Returns a new linked list
 	 *
 	 * @param {E[]?} initializer - If an initializer is passed {@link Collection#addAll} will be called passing it the initializer.
 	 * @param {cmpFtn?} - The comparison function that will be used to determine ordering and equality of elements in the collection.
 	 * @return {DoubleLinkedList}
 	 */
	DoubleLinkedList(initializer=[], cmpFtn=null) {
		return __instantiate(DoubleLinkedList, initializer, cmpFtn);
	}
}

const gipp = new Gipp();

export default gipp;
