function compaerNumbers(x,y){
  if (x<y){
    return - 1;
  }
  if (x>y) {
    return 1;
  }
  return 0;
}

[3,1,4,1,5,9].sort(compaerNumbers); // [1,1,3,4,5,9]

[3,1,4,1,5,9].sort(function(x,y){
  if (x<y){
    return -1;
  }
  if (x>y){
    return 1;
  }
  return 0;
}); // [1,1,3,4,5,9]

var names = ['Fred', 'Wilma', 'Pebbles'];
var upper = [];
for (var i = 0, n = names.length; i<n;i++){
  upper[i] = names[i].toUpperCase();
}
upper; // ["FRED", "WILMA", "PEBBLES"]

var aIndex = "a".charCodeAt(0); // 97

var alphebet = "";
for (var i = 0; i <26;i++){
  alphebet += i;
}

alphebet; // "abcdefghijklmnopqrstuvwxyz"

var digits = "";
for (var i = 0; i < 10; i++){
  digits += 1;
}
digits; // "0123456789"

var random = "";

for (var i = 0; i < 8; i ++){
  random += String.fromCharCode(Math.floor(Math.random() * 26) + aIndex);
}
random;  // "bdwvfrtp" (different result each time)

function buildString(n, callback){
  var result = "";
  for(var i = 0; i < n; i++){
    result += callback(i);
  }
  return result;
}

var alphebet = buildString(26, function(i){
  return String.fromCharCode(aIndex + i);
});
alphebet; // "ababcdefghijklmnopqrstuvwxyz"

var digits = buildString8()