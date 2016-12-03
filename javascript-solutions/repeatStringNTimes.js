
function repeatStringNumTimes(str, num) {
  if (num > 0){
  console.log(str.repeat(num));
  return str.repeat(num);
  }
  else{
    return "";
  }
}

repeatStringNumTimes("abc", 3);