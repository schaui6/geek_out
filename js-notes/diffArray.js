function diffArray(arr1, arr2) {
  var newArr = [];

  for (var i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) === -1){
      newArr.push(arr1[i]);
    }
  }

  for (var j = 0; j < arr2.length; j++) {
    if (arr1.indexOf(arr2[j]) === -1){
      newArr.push(arr2[j]);
    }
  }
  return newArr;
}

diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);