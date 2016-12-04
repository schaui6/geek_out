
function slasher(arr, howMany) {
  // it doesn't always pay to be first
  console.log("removed: " + arr.splice(0,howMany));
  console.log("output: " + arr);
  return arr;
}

slasher([1, 2, 3], 2);
slasher([1, 2, 3], 0);
slasher([1, 2, 3], 9);
slasher([1, 2, 3], 4);
slasher(["burgers", "fries", "shake"], 1);
slasher([1, 2, "chicken", 3, "potatoes", "cheese", 4], 5);
