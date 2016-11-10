// recursive
function factorialize(n) {
  // base case
  if (n == 0) {
    return 1;
  }
  else{
    return n * factorialize(n - 1);
  }
}
console.log(factorialize(5));

// iterative
var factorial = function(n) {
  if(n == 0) {
    return 1
  }
  else {
    product = 1;
    for(i = 1; i <= n; i++) {
      product *= i;
    }
    return product;
  }
}

console.log(factorial(5));
