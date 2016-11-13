#Data Structures
## Linked List

### What is a Linked List?
A linked list is a collection of nodes. Each node has two fields, an integer value and a pointer that points the the next node, which together represents a sequence. The last node points to a terminator used to signify the end of the list.
###Advantages:
* Provides better memory management than arrays.
* Linked lists are allocated memory at run time, so there is no waste in memory.
* Useful data structure when the number of elements to be stored is not known ahead of time.
* Items can be added or removed from the middle of the list.

###Disadvantages:
* Slower than array because there is no direct access to linked list elements.
* Nodes must be read in order from the beginning as linked lists are inherently
* usre more memory than arrays because of the storage used by their pointers.
* Nodes are stored incontiguously, greatly increasing the time required to access individual elements within the list, especially with CPU cache.
* Difficulties arise in linked lists when it comes to reverse traversing. For instance, singly linked lists are cumbersome to navigate backwards and while doubly linked lists are somewhat easier to read, memory is wasted in allocation space for a back-pointer.

###Types of linked lists:
* linear
* circular
* doubly
* doubly circular

## Stack

### What is a Stack?
A Stack is a first-in-last-out strategy data structure. What identifies the data structure as a stack in either case is not the implementation but the interface: the user is only allowed to pop or push items onto the array or linked list, with few other helper operations.

###Applications:
* Solving Recursion - recursive calls are placed onto a stack, and removed from there once they are processed.
* Evaluating post-fix expressions
* Runtime memory management
* Backtracking
* Efficient algorithms
