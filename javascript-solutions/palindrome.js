// Input: "lol"
// Output: true

// Iterate through the string
// Check to see the outer(first and last) characters are equal and continue to check if the next inner characters are equal until there is a character that does not match and return false
// Otherwise there is a matching character and is a palindrome so return true

function palindrome(str) {
  // loop through string
  for(var i = 0;i < str.length; i++){
    // if the first and last element of each iteration does not match
    if( str[i] != str[str.length - 1 - i] ) {
      // return false
      console.log("false");
      return false;
    }
    else {
      // return true if there isn't 
      console.log("true");
      return true;
    }
  }
}

palindrome("eye"); // true
palindrome("apple"); // false
palindrome("race car"); //true
