function Tree(oranges){
  this.fruitType = "oranges";
  this.fruit = oranges;
}

var orangeTree = new Tree(10);

Tree.prototype.countFruit = function(){
  console.log("We have " + this.fruit + " " + this.fruitType);
};

orangeTree.countFruit();