# Gipp

Is a Data Structure and Algorithm library written in ES 2015 (JavaScript 6). Its main design goals are to be predictable and easy to learn.

#### It is available in 4 flavours.

1. As a ES 2015 library: `gipp`
2. Transpiled using babel for compatibility with ES 5: `gipp-transpiled`
3. Transpiled and bundled using browserfy: `gipp-bundle`
4. A minified version of the of the browserfy file: `gipp-min-bundle`


### To install Gipp

`npm install gipp`

```javascript
import gipp from 'gipp';
const list = gipp.LinkedList();
list.addAll(...[1,2,3]); // or list.addAll(1,2,3);
for (let e of list) {
	console.log(`${e} `); // 1 2 3
}
```

### To install Gipp-Transpiled

`npm install gipp-transpiled`

```javascript
var gipp = require('gipp-transpiled');
var tree = gipp.AVLTree();
tree.addAll(1,2,3,4,5,6);
console.log(tree.toString()); // {4, 2, 5, 1, 3, 6}
```

### To install Gipp-Bundle

`npm install gipp-bundle`

```html
<script src="./node_modules/gipp-bundle/gipp.bundle.js"></script>
<script type="text/javascript">
var heap = gipp.MaxHeap();
heap.add(1).add(2).addAll(3,4,5);
while (!heap.isEmpty) {
	document.write(heap.max() + ' '); // 5 4 3 2 1
}
</script>
```

### To install Gipp-Min-Bundle

`npm install gipp-bundle`

```html
<script src="./node_modules/gipp-min-bundle/gipp.bundle.js"></script>
<script type="text/javascript">
var queue = gipp.ListQueue();
queue.enqueueAll(4,1,2,5,3);
while (queue.size > 0) {
	document.write(queue.dequeue() + ' '); // 4 1 2 5 3
}
</script>
```

Gipp currently has implementations the following data structures:

 - Linked List
 - Double Linked List
 - AVL Tree
 - Min Heap
 - Max Heap
 - Queue
 - Stack

With plans to implement:

 - Red Black Tree
 - Splay Tree
 - Graph (in the form of adjacency lists)
 - Priority Queue

#### Before Gipp is released at 1.x the interface may change

All collections in Gipp present the same interface, the methods include:

 - `get size() -> number`
 - `get isEmpty() -> boolean`
 - `*[Symbol.iterator]() -> Generator`
 - `add(E) -> Collection`
 - `addAll(...E) -> Collection`
 - `contains(E) -> boolean`
 - `delete(E) -> boolean`
 - `forEach(cb) -> void`
 - `map(cb) -> Collection`
 - `toString() -> string`

Each collection is guaranteed to implement these methods. There are plans to add a few more methods to the collection interface, they include:

 - `clear() -> void`
 - `deleteAll(E) -> number`
 - `toArray() -> Array`

#### Constructor Methods

Gipp exposes methods intended to create objects on your behalf.

	// returns a new empty Stack object with a default comparison function
	gipp.Stack();

	// returns a new Stack object with a default comparison function
	// and calls addAll(...[1,2,3])
	gipp.Stack([1,2,3]);

	// returns a new Stack object with a custom comparison function
	gipp.Stack(function (a, b) { return b - a; });

	// returns a new Stack object with a custom comparison function
	// and calls addAll(...[{n:1},{n:2},{n:3}])
	gipp.Stack([{n:1},{n:2},{n:3}], (a,b) => a.n - b.n);

These initialization patterns apply to each collection in Gipp. Once a collection is instantiated the comparison function is **immutable**.

### Things Worth Mentioning

 - Gipp favours throwing exceptions over returning a flag such as `null` or `undefined` when an operation can't be completed. An example would be `List#shift`.

		let list = gipp.LinkedList();
		list.shift(); // throws an EmptyCollectionError
		list.unshift(null);
		list.shift(); // returns null
	As a result it **should** be safe to store `null` in a collection.

 - Gipp will not enforce that a collection be homogeneous.


 - Gipp collections are not `Sets` you may have multiple duplicate values in a collection.

### Documentation
For now the documentation is included in the repo. The documentation is built with JSDocs, unfortunately at this time JSDocs has limited support for ES 2015 syntax. As a result a few methods are missing from the documentation.
