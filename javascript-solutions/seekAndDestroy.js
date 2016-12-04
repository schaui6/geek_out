
function destroyer(arr) {
  var output = [];
  var one = arguments[0];
  var two = arguments[1];
  var three = arguments[2];
  var four = arguments[3];
  for(var i = 0;i < one.length;i++){
  
    if(one[i] !== two && one[i] !== three && one[i] !== four){
      output.push(one[i]);
    }
  }
  console.log(output);
  return output;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3);
destroyer([3, 5, 1, 2, 2], 2, 3, 5);
destroyer([2, 3, 2, 3], 2, 3);
destroyer(["tree", "hamburger", 53], "tree", 53);