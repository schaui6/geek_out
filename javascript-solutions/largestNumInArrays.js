// Pseudocode
// iterate through i (each nested array in the array)
// store a greedy variable
// iterate through j (each element in nested array)
// store j into the greedy variable and if the new j is larger store that value into the greedy variable
// push the greedy variable into output array

function largestOfFour(arr) {
  var output = [];

  for(var i=0;i < arr.length; i++){
    var greedy = 0;
    for(var j=0;j < arr.length; j++){
      if (greedy < arr[i][j]){
        greedy = arr[i][j];
      }
    }
    output.push(greedy);
  }
  console.log(output);
  return output;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]])