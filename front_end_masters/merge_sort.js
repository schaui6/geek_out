// merge sort (n log n) -- divide and conquer(usually means recusion) - used most often (90% of the time, Array.sort == merge sort)
// arrays must be first sorted in order for merge sort to work

const mergeSort = (nums) => {
  if(nums.length < 2) {
    return nums;
  }

  const length = nums.length;
  const middle = Math.floor(length/2);
  const left = nums.slice(0,middle);
  const right = nums.slice(middle,length);

  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  return stitch(sortedLeft, sortedRight);
}

const stitch = (left, right) => {
  const results =[];

  // as long items still remaining in left array and items remaining in right array, then continue to loop through this
  while(left.length && right.length) { // left.length == left.length <= 0, b/c we are removing elements until left.length == 0 which equals false 
    if(left[0] <= right[0]){
      results.push(left.shift());
    }
    else {
      results.push(right.shift());
    }    
  }
  //if one array has any remainders add it to the end of the results array
  while(left.length){
    results.push(left.shift());
  }
  while(right.length) {
    results.push(right.shift());
  }
  return results
};