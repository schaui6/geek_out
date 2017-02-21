var add = function(a){
  return function(b){
    return a + b; 
  };
};

var addToFive = add(5);

// function(b) {
  // return 5 + b; 
// }

console.log(addToFive(1)); // 6