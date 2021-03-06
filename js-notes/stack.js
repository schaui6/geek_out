var Stack = function(capacity){
  this._capacity = capacity || Infinity;
  this._storage = {};
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

Stack.prototype.contains = function(value){
  for(var i = 0; i < this._count; i++){
    if(this._storage[i] === value) return true;
  }
  return false;

};

Stack.prototype.until = function(value){
  for(var i = 0; i < this._count; i ++){
    if(this._storage[i] === value) return i+1;
  }
  return null;
};


var myWeeklyMenu = new Stack(3);

myWeeklyMenu.push("RedBeans");
myWeeklyMenu.push("BlueBeans");
myWeeklyMenu.size();
myWeeklyMenu.pop();
myWeeklyMenu.size();
myWeeklyMenu.push("BlueBeans");
myWeeklyMenu.peek();
myWeeklyMenu.push("BlueBeans");
myWeeklyMenu.push("BlueBeans");
