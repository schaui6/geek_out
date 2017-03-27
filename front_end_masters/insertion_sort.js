// insertion sort (n^2) **will use**
// great for: arrays that are already sorted or very close to be sorted

// [[5],3,6]
// [3,5,6]

// outter loop: goes through whole loop, i = where you are on sorted loop
  //ex. if i = index 2, every index before index 2 is sorted and everything after is unsorted
// inner loop:  loops over just the sorted part of the array.

const insertionSort = (nums) => {
  for(let i = 1; i < nums.length; i++){
    for(let j = 0; j < i; j++){ //only loop through j if is sorted and stop where it is unsorted
    //   snapshot(nums);
      if(nums[i]< nums[j]){
        const spliced = nums.splice(i,1); // find element at index i and take that 1 element out
        nums.splice(j,0,spliced[0]); // find element at index j, don't take anything out, insert element

      }
    }
  }
}