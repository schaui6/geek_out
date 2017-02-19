//  A closure is a function that has a reference to a private variable
var addTo = funtion(passed){

  var add = function(inner){
    return passed + inner;
  };

  return add;

};

var addThree = new addTo(3);
var addFour = new addTo(4);

addThree(1);
addFour(1);