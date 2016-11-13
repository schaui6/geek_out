// Create a linked list Object
function LinkedList() {
  // the function context has a null head as default
   this.head = null;
 }
// add a function to the linked list object to check if it is empty
LinkedList.prototype.isEmpty = function(){
  //  returns true if the head is null
  return this.head === null;
};

// [10] -> [20] -> [30] -> null

LinkedList.prototype.size = function() {
  var current = this.head;
  var count = 0;

  while(current !== null){
    count++;
    current = current.next;
  }
  return count;
};

// [5]-> [10] -> [15] -> [20] -> null
// 1. Create a new node with value
// 2. Make the new node point to the current head
// 3. Update this.head to point to the new node
LinkedList.prototype.prepend = function(val){
  var newNode = {
    data: val,
    next: this.head
  };

  this.head = newNode;
};

// 1. Create a new new node using val
// 2. Traverse to the end of the list
// 3. Make the last node's 'next' value point to the new node

LinkedList.prototype.append = function(val) {
  var newNode = {
    data: val,
    next: null
  };

  if(this.isEmpty()){
    this.head = newNode;
    return;
  }

  var current = this.head;

  while(current.next !== null){
    current = current.next;
  }
  current.next = newNode;
};

LinkedList.prototype.contains = function(val){
  var current = this.head;

  while(current !== null){
    if(current.data === val){
      return true;
    }
    current = current.next;
  }
  return false;
}

// [5] -> [10] -> [15] -> [20] -> null
// prev  current
LinkedList.prototype.remove = function(val){
  if(this.contains(val)){
    return;
  }
  if(this.head.data === val){
    this.head = this.head.next;
    return;
  }

  var prev = null;
  var curr = this.head;

  while(curr.data !== val){
    prev = curr;
    curr = curr.next;
  }
  prev.next = curr.next;
};

// [5, 10, 15, 20]
LinkedList.prototype.print = function(){
  var output = '[';
  var current = this.head;

  while(current !== null){
    output += current.data;

    if(current.next !== null){
      output += ",";
    }
    current = current.next;
  }

  output += ']'
  console.log(output);
};

var list = new LinkedList();
list.append(10);
console.log(list);
list.append(15);
console.log(list);
list.remove(15);
console.log(list);
list.append(20);
list.append(25);
list.prepend(5);
console.log(list);
console.log(list.contains(10));
console.log(list.size());
console.log(list.isEmpty());
list.print();

// { head:{ data: node1 , next: null} }

// append a node - next equals new node
// { head:{ data: node1 , next: { data: node2, next: null } } }

// prepend a node - next equals head and new head equals new node
// { head2: { data: node2 , next: head1} }

// remove a node - current.next == curernt.next.next and current equals current.next
// { head:{ data: node1 , next: { data: node2, next: { data: node3, next: null } } } }
//              current                 current.next        current.next.next
// { head:{ data: node1 , next: { data: node3, next: null } } }
//
