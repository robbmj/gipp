

import LinkedList from "./collections/lists/linkedlist";
import DoubleLinkedList from "./collections/lists/doublelinkedlist";

import AVLTree from './collections/trees/avltree';
import SplayTree from './collections/trees/splaytree';
import RBTree from './collections/trees/rbtree';


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
 	 * Returns a new double linked list
 	 *
 	 * @param {E[]?} initializer - If an initializer is passed {@link Collection#addAll} will be called passing it the initializer.
 	 * @param {cmpFtn?} - The comparison function that will be used to determine ordering and equality of elements in the collection.
 	 * @return {DoubleLinkedList}
 	 */
	DoubleLinkedList(initializer=[], cmpFtn=null) {
		return __instantiate(DoubleLinkedList, initializer, cmpFtn);
	}

	/**
 	 * Returns a new AVL Tree
 	 *
 	 * @param {E[]?} initializer - If an initializer is passed {@link Collection#addAll} will be called passing it the initializer.
 	 * @param {cmpFtn?} - The comparison function that will be used to determine ordering and equality of elements in the collection.
 	 * @return {AVLTree}
 	 */
	AVLTree(initializer=[], cmpFtn=null) {
		return __instantiate(AVLTree, initializer, cmpFtn);
	}

	/**
 	 * Returns a new Splay Tree
 	 *
 	 * @param {E[]?} initializer - If an initializer is passed {@link Collection#addAll} will be called passing it the initializer.
 	 * @param {cmpFtn?} - The comparison function that will be used to determine ordering and equality of elements in the collection.
 	 * @return {SplayTree}
 	 */
	SplayTree(initializer=[], cmpFtn=null) {
		return __instantiate(SplayTree, initializer, cmpFtn);
	}

	/**
 	 * Returns a new Red Black Tree
 	 *
 	 * @param {E[]?} initializer - If an initializer is passed {@link Collection#addAll} will be called passing it the initializer.
 	 * @param {cmpFtn?} - The comparison function that will be used to determine ordering and equality of elements in the collection.
 	 * @return {RBTree}
 	 */
	RBTree(initializer=[], cmpFtn=null) {
		return __instantiate(RBTree, initializer, cmpFtn);
	}

}

const gipp = new Gipp();

export default gipp;
