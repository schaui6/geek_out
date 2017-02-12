var Stack = function(capacity){
  this._capacity = capacity || Infinity;
  this._storage = "";
  this._count = 0;
};

Stack.prototype.push = function(value){
  if(this._count < this._capacity){
    this._storage[this._count++] = value;
    console.log(this._count);
    return this._count;
  }
  else{
    console.log("Max capacity already reached. Remove element before adding a new one.");
    return "Max capacity already reached. Remove element before adding a new one.";
  }
};

Stack.prototype.pop = function(){
  var value = this._storage[--this._count];
  delete this._storage[this._count];
  if(this._count < 0){
    this._count = 0;
  } 
  return value;
 };

Stack.prototype.size = function(){
  return this._count;
};

Stack.prototype.peek = function(){
  return this._storage[this._count-1];
};

Stack.prototype.contains = function(val){

};

Stack.prototype.until = function(val){

};


var myStack = new Stack(3);
console.log(myStack.push('a'), 'should be 1');
console.log(myStack.push('b'), 'should be 2');
console.log(myStack.push('c'), 'should be 3');
console.log(myStack.push('d'), 'should be Max capacity reached');
console.log(myStack.pop(), 'should be c');
console.log(myStack.size(), 'should be 2');
console.log(myStack.peek(), 'should be b');
console.log(myStack.count(), 'should be 2');

// var myWeeklyMenu = new Stack(3);

// myWeeklyMenu.push("RedBeans");
// myWeeklyMenu.push("BlueBeans");
// myWeeklyMenu.size();
// myWeeklyMenu.pop();
// myWeeklyMenu.size();
// myWeeklyMenu.push("BlueBeans");
// myWeeklyMenu.peek();
// myWeeklyMenu.push("BlueBeans");
// myWeeklyMenu.push("BlueBeans");


function MinStack(capacity) {
  this._capacity = capacity;
  this._storage = {};
  this._count = 0;
  this._min = new Stack();
}

MinStack.prototype.push  = function(value){
  if(this._count < this._capacity){
    if(this._min.peek() < value){
      this._min.push(this._min.peek());
    } else {
      this._min.push(value);
    }
    this._storage[this._count++] = value;
    return this._count;
  }
  return 'Max capacity already reached. Remove element before adding a new one.';
};  

MinStack.prototype.pop = function() {
  this._min.pop();
  var value = this._storage[--this._count];
  delete this._storage[this._count];
  if(this._count < 0){
    this._count = 0;
  }
  return value;
};

MinStack.prototype.peek = function(){
  return this._storage[this._count-1];
};

MinStack.prototype.size = function(){
  return this._count;
};

MinStack.prototype.min = function(){
  return this._min.peek();
};