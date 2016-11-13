function bubbleSort(arr){
  var len = arr.length;
  for(var i=len-1; i>=0;i--){ //o(n)
    for(var j=1; j<=i;j++){    //o(n)
      console.log(arr);
      if(arr[j-1]>arr[j]){
        var temp = arr[j-1];
        arr[j-1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  console.log(arr);
  return arr;
}
// time: o(n^2) - quadratic
// space: o(n^2) - quadratic
bubbleSort([7,5,2,4,3,9]); //[2, 3, 4, 5, 7, 9]
// [ 7, 5, 2, 4, 3, 9 ]
// [ 5, 7, 2, 4, 3, 9 ]
// [ 5, 2, 7, 4, 3, 9 ]
// [ 5, 2, 4, 7, 3, 9 ]
// [ 5, 2, 4, 3, 7, 9 ]
// [ 5, 2, 4, 3, 7, 9 ]
// [ 2, 5, 4, 3, 7, 9 ]
// [ 2, 4, 5, 3, 7, 9 ]
// [ 2, 4, 3, 5, 7, 9 ]
// [ 2, 4, 3, 5, 7, 9 ]
// [ 2, 4, 3, 5, 7, 9 ]
// [ 2, 3, 4, 5, 7, 9 ]
// [ 2, 3, 4, 5, 7, 9 ]
// [ 2, 3, 4, 5, 7, 9 ]
// [ 2, 3, 4, 5, 7, 9 ]
// [ 2, 3, 4, 5, 7, 9 ]

bubbleSort([9,7,5,4,3,1]); //[1, 3, 4, 5, 7, 9]
bubbleSort([1,2,3,4,5,6]); //[1, 2, 3, 4, 5, 6]

// Bubble Sort
// How it works:
//
// step-1: you compare the first item with the second. If the first item is bigger than the second item. you swap them so that the bigger one stays in the second position.
//
// step-2:And then compare second with third item. if second item is bigger than the third, we swap them. otherwise, they stayed in their position. Hence, the biggest among first three is in the third position.
//
// step-3:we keep doing it. until we hit the last element of the array. In that way we bubble up the biggest item of the array to the right most position of the array.
//
// step-4: Look at the inner loop in the code below.
//
// step-5: We repeat this process, starting from the last item of the array. look at the outer loop in the code below. We do this way, so that after finishing the first inner loop, the biggest one will be in the last item of the array.
//
// step-6: and then we move backward inside the outer loop.
//
// same thing is going on....


// Class:	Sorting algorithm
// Data structure:	Array
// Worst-case performance:	O(n^{2})
// Best-case performance:	O(n)
// Average performance: O(n^{2})
// Worst-case space complexity:	O(1) auxiliary
