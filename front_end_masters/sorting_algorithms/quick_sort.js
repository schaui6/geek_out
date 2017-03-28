// quick sort (n^2)
// best and average case(n log n)
// divide and conquer algorithm (recursive)
// quick sort is often faster than merge sort
// takes up less memory than merge sort
// but really bad worst case scenario (n^2)

// [5,7,4,9,6]
// [5,7,4,9,6] pick a pivot
// [5,7,4,9,[6] ] (inner []) == pivot
// left = [all nums < pivot]
// right = [all nums > pivot]
// left = [5,4], right = [7,9]
// now call quickSort(recursively) on left array, then on right array until base case
// left pivot = 4
// [] + [5]
//[4,5]
// then concatenate
// right pivot = 9
// [7] + []
// [7,9]
// [4,5,6,7,9]
// return sorted array

const quickSort = (nums) => {
  if(nums.length < 1) return nums;

  const pivot = nums[nums.length-1];
  const left = [];
  const right = [];

  for(let i = 0; i < nums.length-1; i++){
    if(nums[i] < pivot) {
      left.push(nums[i]);
    }
    else {
      right.push(nums[i]);
    }
  }
  
//   return [...quickSort(left), pivot, ...quickSort(right)];
return quickSort(left).concat(pivot, quickSort(right));
}