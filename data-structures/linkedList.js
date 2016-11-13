 function LinkedList() {
   this.head = null;
 }

LinkedList.prototype.isEmpty = function(){
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
list.append(15);
list.append(20);
list.append(25);
list.prepend(5);
console.log(list.contains(10));
console.log(list.size());
console.log(list.isEmpty());
list.print();
