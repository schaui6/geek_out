// Language: JavaScript

// Input: [1,2,5], 8
// Output: [1,1,7] 

// Challenge:
  // given an array [1,2,3] representing the number 123, and a single digit number (3), reduce the array by the single digit number.

// Psuedocode:
  // Create a function that takes in an array and number
  // If a  

function subtract_from_array(array, number) {
  var total_count = array.length;
  // if the array only has 1 index
  if(total_count == 1){
    // return the value
    array[0] = array[0] - number;
    console.log(array);
  }
  // if there are more than 1 index in the array
  else if(total_count > 1){
    var cur_column = array[total_count-1] - number;
    // point the current column value is negative
    if(cur_column < 0){
      // borrow from the value from the column to it's left
      // Add 10 to the current column and assign it's value to the last index
      array[total_count-1] = cur_column + 10;
      // subtract 1 from the value were we borrowed from
      array[total_count-2] = array[total_count-2] - 1;
      console.log(array);
    }
    // current column is positive
    else{
      // assign value of the current column to the last index
      array[total_count-1] = cur_column;
      console.log(array);

    }
  }
}

subtract_from_array([1], 8);
subtract_from_array([1,2], 8);
subtract_from_array([1,2,5], 8);
subtract_from_array([1,2,5], 2);
subtract_from_array([1,2,5,5], -1);
subtract_from_array([1,2,5], -1);
