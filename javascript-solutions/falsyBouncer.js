
function bouncer(arr) {
  var output = [];
  arr.filter(function(i) {
    if(i){
      output.push(i);
    }
  });
  console.log(output);
  return output;
}

bouncer([7, "ate", "", false, 9]);
bouncer(["a", "b", "c"]);
bouncer([false, null, 0, NaN, undefined, ""]);
bouncer([1, null, NaN, 2, undefined]);

