// a way to store and access fast
// everything left of the tree is < root node 
// everything right of the tree is > root node
// lookups are logrithmic
// best and average time (log n)
// worst case (o(n))
// use case: can search ordered nodes quickly

// iterative:
class Tree {
  constructor() {
    this.root = null;    
  }
  toObject() {
    return this.root;
  }
  add(value) {
    if(this.root === null) {
      // if no head create new head
      this.root = new Node(value);
      return;
    }

    let current = this.root;
    while(true) {
      if(current.value > value) {
      // go left
        if(current.left) {
          current = current.left;
        }
        else current.left = new Node(value);
        return;
      }    
      else {
      // go right
        if(current.right) {
          current = current.right;
        }   
        else {
          current.right = new Node(value);
          return;
        }   
      }
    }       
  }
}

class Node {
  constructor(value, left=null, right=null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}