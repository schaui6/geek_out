function sumAll(arr) {
  var total = 0;

  
  createRange(arr).forEach(function(val){
    total += val;
  });
  
  return total;
  
}

function createRange(arr) {
  var end = arr[1];
  var start = arr[0];
  var range = [];

  if (arr[0] > arr[1]) {
    start = arr[1];
    end = arr[0];
  }

  for(var i = start; i <= end; i++){
    range.push(i);
  }
  return range;
}


console.log(sumAll([10, 5]));
