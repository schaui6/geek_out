// Declare a function named reverseString that takes a parameter str
function reverseString(str) {
  // split the string by characters and assign it to an array
  var arr = str.split("");
  // loop through each element of the array
  for(var i = 0;i < arr.length/2; i++){
    // store the value of the element in a temp variable
    var temp = arr[i];
    // re-assign the last index element as the first index element
    arr[i] = arr[arr.length - 1 - i];
    // re-assign the last index element as the first index element (temp)
    arr[arr.length - 1 - i] = temp;
  }
  console.log(arr.join(""));
}

reverseString("hello");
