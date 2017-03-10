// input: [1, 3, 2], [5, 2, 1, 4], [2, 1]
// output: [1,3,2,5,4]
// question: write a function that takes in 2 or more arrays and return an array one of each number/element in left to right order.

// function uniteUnique(arr) {
//   if(arguments.length >= 1) {
//     return arr;
//   } 
//   else {
//     var dict = {};
//     var output = [];
//     for(var i = 0; i < arguments.length; i++ ) {
//       for(var j = 0, m = arguments[i].length; j < m; j++ ) {
//         arguments[i].forEach(function(val) {
//           if(dict[val] === undefined) {
//             dict[val] = val;
//           } 
//         });
//       }
//     }

//     for(var key in dict) {
//       output.push(dict[key]);
//     }

//     return output;
//   } 
// }

function uniteUnique(arr) {
  var output = [];

  for (var i = 0; i < arguments.length; i++) {
    var arrayArguments = arguments[i];

    for (var j = 0; j < arrayArguments.length; j++) {
      var indexValue = arrayArguments[j];

      if (output.indexOf(indexValue) < 0) {
        output.push(indexValue);
      }
    }
  }
  return output;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
console.log(uniteUnique([1, 3, 2], [1, [5]], [2, [4]]));
console.log(uniteUnique([1, 2, 3], [5, 2, 1]));
console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]));
