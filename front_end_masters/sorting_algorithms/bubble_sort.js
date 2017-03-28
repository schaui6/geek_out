// bubble sort (n^2)
const bubbleSort = (nums) => {
  let swapped = false;
  do {
    var swapped = false;
    for(let i = 0; i < nums.length; i++) {
      snapshot(nums);      
      if(nums[i] > nums[i+1]){
        const temp = nums[i];
        nums[i] = nums[i+1];
        nums[i+1] = temp;
        swapped = true;
      }
    }
  } while(swapped);
  snapshot(nums);
}


// 2 pointers
// 1 outter loop and 1 inner loop
// loop through if first pointer is true, mark false, and if it is swapped mark true
// if first pointer is > second pointer, swapp, then mark swap = true
// [7,9,3,8]
// [7,3,9,8]
// [7,3,8,9]
// [3,7,8,9]
