// not really implentations, b/c we are not controlling memory

// array
// fixed amount of elements allocated in memory
// tradeoff: if you delete or insert in middle of the array, it becomes expensive to shift elements
// but lookup is faster

// Arraylist
  // delete is expensive
  // tradeoff:
    // not a good data structure for deleting a lot of elements
    // but really great for deleting a few
    // use linkedlist instead for a lot of elements


class ArrayList {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  push(value) {
    this.data[this.length] = value;
    this.length += 1;
  }
  pop() {
    // const ans = this.data[this.length-1];
    // delete this.data[this.length-1];
    // this.length -= 1;
    // return ans;
    return this.delete(this.length-1);
  }
  get(index) {
    return this.data[index];  
  }
  delete(index){
    const ans = this.data[index];
    this._collapseTo(index);
    return ans;
  }
  _collapseTo(index){
    for(let i = index; i < this.length; i++){
      this.data[i] = this.data[i+1]
    }
    delete this.data[this.length-1];
    this.length-=1;
  }
}

//Linkedlist

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push() {
    const node = new Node(value);
    this.length += 1;
    if(!this.head) {
      this.head = node;
    }
    else {
      this.tail.next = node;
    }
    this.tail = node;
  }
  pop() {
    return this.delete(this.length-1);    
  }
  _find(value, test=this._test) {
    let current = this.head;
    let i = 0;
    while(current) {
      if(test(value, current.value, i, current)) {
        return current;    
      }
      current = current.next;
      i += 1;
    }
    return null;
  }
  _test(a,b) {
    return a === b;
  }
  _testIndex(search, __, i) {
    return search === i;    
  }
  get(index) {
    const node = this._find(index, this._testIndex());
    if(!node) {
      return null;    
    }
    return node.value;
  }
  delete(index) {
    if(index === 0) {
      const head = this.head;
      if(head) {
          this.head = head.next;
      }
      else {
        this.tail = this.head = null;
      }
      this.length -=1;
      return head.value;
    }
    const node = this._find(index-1, this._testIndex);
    const excise = node.next;
    if(!excise) return null;
    node.next = excise.next;
    if(node.next && !node.next.next) {
      this.tail = node.next;
    }
    this.length -= 1;
    return excise.value;
  }
}


class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
