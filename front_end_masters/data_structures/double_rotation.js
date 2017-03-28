// if its a bent :
// ex. 5
//      \
//       8
//      /
//     7

// then: do double rotation
// check balance of node A: left height is 0, right height is 2, unbalanced - right heavy, child is left heavy
// perform left rotation on left heavy right child node B 

// 5
//  \
//   7
//    \
//     8

// now perform right notation on node A.

// result:
//   7
//  / \
// 5   8

class Tree {
  constructor() {
    this.root = null;
  }
  add(value) {
    if(!this.root) {
      this.root = new Node(value);    
    }
    else {
      this.root.add(value);
    }
  }
  toObject(){
    return this.root;
  }
}

class Node {
  constructor(value, left=null, right=null) {
    this.value = value;
    this.left = left;
    this.right = right;
    this.height = 1;
  }
  add(value) {
    if(value < this.value) {
      // go left
      if(this.left) {
        this.left.add(value);
      }
      else {
        this.left = new Node(value); 
      }
      if(!this.right || this.right.height < this.left.height) {
        this.height = this.left.height + 1;  
      }
      else {
        if(this.right) {
          this.right.add(value);
        }
        else {
          this.right = new Node(value);  
        }
        if(!this.left || this.right.height > this.left.height) {
          this.height = this.right.height + 1;  
        }
      }
      this.balance();
    }  
    balance() {
      const rightHeight = (this.right) ? this.right.height : 0;
      const leftHeight = (this.left) ? this.left.height : 0;

      if(leftHeight > rightHeight + 1) {
        const leftRightHeight = (this.left.right) ? (this.left.right.height) : 0;
        const leftLeftHeight = (this.left.left) ? (this.left.left.height) : 0;

        if(leftRightHeight > leftLeftHeight) {
          this.left.rotateRR(); 
        }

        this.rotateLL();
      }
      else if(rightHeight > leftHeight + 1){
        const rightRightHeight = (this.right.right) ? this.right.right.height : 0;
        const rightLeftHeight = (this.right.left) ? this.right.left.heyght : 0;
        
        if(rightLeftHeight > rightRightHeight) {
          this.right.rotateLL();
        }
      }
      rotateRR() {
        const valueBefore = this.value;
        const leftBefore = this.left;
        this.value = this.right.value;
        this.left = this.right;
        this.right = this.right.right;
        this.left.right = this.left.left;
        this.left.left = leftBefore;
        this.left.value = valueBefore;
        this.left.updateInNewLocation();
        this.updateInNewLocation();
      }
      rotateLL() {
        const valueBefore = this.value;
        const rightBefore = this.right;
        this.value = this.left.value;
        this.right = this.left;
        this.left = this.left.left;
        this.right.left = this.right.right;
        this.right.right = rightBefore;
        this.right.value = valueBefore;
        this.right.updateInNewLocation();
        this.updateInNewLocation();
      }
      updateInNewLocation() {
        if(!this.right && !this.left) {
          this.height = 1;
        }
        else if(!this.right || this.left && this.right.height < this.left.height) {
          this.height = this.left.height + 1;    
        }
        else { //if (!this.left || this.right.height > this.left.height)
          this.height = this.right.height + 1;
        }
      }
      serialize() {
        const ans = {value: this.value};
        ans.left = this.left === null ? null : this.left.serialize();
        ans.right = this.right === null ? null : this.right.serialize();
        ans.height = this.height;
        return ans;
      }
    }
  }
}

var x = new Tree();
range(255).map( index => x.add(index));

render(x.root);
