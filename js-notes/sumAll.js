function sumAll(arr) {
  var total = 0;
  var len = arr.length;
  
  for(var i = 0; i <= len;i++){
    total += arr[i];
  }
  return total;
}

sumAll([1, 4]);
