var reverseInt = function(x) {
  var str = x.toString().split("");
  for(var i = 0; i < str.length/2; i++){
    var temp = str[i]
    str[i] = str[str.length - i -1];
    str[str.length - i -1] = temp;
  }
  var solution = parseInt( str.join("") );
  if(x<0){
    return solution * -1;
  }
  else{
    console.log(solution);
    return solution;
  }
};


reverseInt(1534236469);
reverseInt(-456);
