
import LinkedList from "./collections/lists/linkedlist";
import DoubleLinkedList from "./collections/lists/doublelinkedlist";

import AVLTree from './collections/trees/avltree';
import SplayTree from './collections/trees/splaytree';
import RBTree from './collections/trees/rbtree';

import Stack from './collections/stacks/stack';

import ListQueue from './collections/queues/listqueue';
import PriorityQueue from './collections/queues/priorityqueue';

import MaxHeap from './collections/heaps/maxheap';
import MinHeap from './collections/heaps/minheap';

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
 	 * @param {CmpFtn?} cmpFtn - The comparison function that will be used to determine ordering and equality of elements in the collection.
 	 * @return {LinkedList}
 	 */
	LinkedList(initializer=[], cmpFtn=null) {
		return __instantiate(LinkedList, initializer, cmpFtn);
	}

	/**
 	 * Returns a new double linked list
 	 *
 	 * @param {E[]?} initializer - If an initializer is passed {@link Collection#addAll} will be called passing it the initializer.
 	 * @param {CmpFtn?} cmpFtn - The comparison function that will be used to determine ordering and equality of elements in the collection.
 	 * @return {DoubleLinkedList}
 	 */
	DoubleLinkedList(initializer=[], cmpFtn=null) {
		return __instantiate(DoubleLinkedList, initializer, cmpFtn);
	}

	/**
 	 * Returns a new AVL Tree
 	 *
 	 * @param {E[]?} initializer - If an initializer is passed {@link Collection#addAll} will be called passing it the initializer.
 	 * @param {CmpFtn?} cmpFtn - The comparison function that will be used to determine ordering and equality of elements in the collection.
 	 * @return {AVLTree}
 	 */
	AVLTree(initializer=[], cmpFtn=null) {
		return __instantiate(AVLTree, initializer, cmpFtn);
	}

	/**
 	 * Returns a new Splay Tree
 	 *
 	 * @param {E[]?} initializer - If an initializer is passed {@link Collection#addAll} will be called passing it the initializer.
 	 * @param {CmpFtn?} cmpFtn - The comparison function that will be used to determine ordering and equality of elements in the collection.
 	 * @return {SplayTree}
 	 */
	SplayTree(initializer=[], cmpFtn=null) {
		return __instantiate(SplayTree, initializer, cmpFtn);
	}

	/**
 	 * Returns a new Red Black Tree
 	 *
 	 * @param {E[]?} initializer - If an initializer is passed {@link Collection#addAll} will be called passing it the initializer.
 	 * @param {CmpFtn?} cmpFtn - The comparison function that will be used to determine ordering and equality of elements in the collection.
 	 * @return {RBTree}
 	 */
	RBTree(initializer=[], cmpFtn=null) {
		return __instantiate(RBTree, initializer, cmpFtn);
	}

	/**
 	 * Returns a new Stack
 	 *
 	 * @param {E[]?} initializer - If an initializer is passed {@link Collection#addAll} will be called passing it the initializer.
 	 * @param {CmpFtn?} cmpFtn - The comparison function that will be used to determine ordering and equality of elements in the collection.
 	 * @return {Stack}
 	 */
	Stack(initializer=[], cmpFtn=null) {
		return __instantiate(Stack, initializer, cmpFtn);
	}

	/**
 	 * Returns a new ListQueue
 	 *
 	 * @param {E[]?} initializer - If an initializer is passed {@link Collection#addAll} will be called passing it the initializer.
 	 * @param {CmpFtn?} cmpFtn - The comparison function that will be used to determine ordering and equality of elements in the collection.
 	 * @return {ListQueue}
 	 */
	ListQueue(initializer=[], cmpFtn=null) {
		return __instantiate(ListQueue, initializer, cmpFtn);
	}

	/**
 	 * Returns a new PriorityQueue
 	 *
 	 * @param {E[]?} initializer - If an initializer is passed {@link Collection#addAll} will be called passing it the initializer.
 	 * @param {CmpFtn?} cmpFtn - The comparison function that will be used to determine ordering and equality of elements in the collection.
 	 * @return {PriorityQueue}
 	 */
	PriorityQueue(initializer=[], cmpFtn=null) {
		return __instantiate(PriorityQueue, initializer, cmpFtn);
	}

	/**
 	 * Returns a new MaxHeap
 	 *
 	 * @param {E[]?} initializer - If an initializer is passed {@link Collection#addAll} will be called passing it the initializer.
 	 * @param {CmpFtn?} cmpFtn - The comparison function that will be used to determine ordering and equality of elements in the collection.
 	 * @return {MaxHeap}
 	 */
	MaxHeap(initializer=[], cmpFtn=null) {
		return __instantiate(MaxHeap, initializer, cmpFtn);
	}

	/**
 	 * Returns a new MinHeap
 	 *
 	 * @param {E[]?} initializer - If an initializer is passed {@link Collection#addAll} will be called passing it the initializer.
 	 * @param {CmpFtn?} cmpFtn - The comparison function that will be used to determine ordering and equality of elements in the collection.
 	 * @return {MinHeap}
 	 */
	MinHeap(initializer=[], cmpFtn=null) {
		return __instantiate(MinHeap, initializer, cmpFtn);
	}
}

const gipp = new Gipp();

export default gipp;
