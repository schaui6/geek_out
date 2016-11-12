var reverseString = function(str){
  var split = str.split("");
  for(var i = 0;i<split.length;i++){
    var last_char = split[split.length - i - 1];
    var temp = i;
    split[i] = last_char;
    split[last_char] = temp;
    var revString = split.join("");
    console.log(revString);
    return revString;
  }
};

var reverseBits = function(n){
  var bits = n.toString(2);
  var bitCount = bits.length;

  if(bitCount != 32){
    var diff = 32 - bitCount;
    var leadingZeros = "0";
    for(var i=1;i<diff;i++){
      leadingZeros+="0";
    }
  var revBit = reverseString(bits) + leadingZeros;
  var results = parseInt(revBit, 2);
  console.log(results);
  return results;

  }
};

reverseBits(43261596);
