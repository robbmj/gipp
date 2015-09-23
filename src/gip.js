

import LinkedList from "./collections/lists/linkedlist";
import DoubleLinkedList from "./collections/lists/doublelinkedlist";

/**
 * Gip - Entry Point for library
 * @namespace
 */
class Gip {
	/**
 	 * Returns a new linked list
 	 *
 	 * @return {LinkedList}
 	 */
	LinkedList() {
		return new LinkedList();
	}
	/**
 	 * Returns a new double linked list
 	 *
 	 * @return {DoubleLinkedList}
 	 */
	DoubleLinkedList() {
		return new DoubleLinkedList();
	}
}

const gip = new Gip();

export default gip;
