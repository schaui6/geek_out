// Language: JavaScript 

// input: String of Parenthesis
  // string
// output: true or false, if false count the number of incomplete pairs of parenthesis'
  // 

//Psuedocode:
  // The parenValidator function takes in a string of parenthesis as a parameter.
  // It traverses one character at a time of the string to find opening parenthesis.
  // It stores the open parenthesis in an array.
  // Every time the string isn't an open parenthesis, it is assumed that is a closing parenthesis and removes an open parenthesis from the array.
  // As it finds pairs of balanced parenthesis' it keeps score of the amount of balanced symbols.
  // If the string is fully balanced then it will print 0 and return true.
  // If the string has any unbalanced parenthesis it will print the number of unbalanced parenthesis and return false.

function parenValidator(symbolString){
    // array to track if open parenthesis' are balanced (have a matching closing parenthesis)
    var start = [];
    // balanced determines looping through the string
    var balanced = true;
    // index determines which element is being manipulated during the while loop
    var index = 0;
    // Only iterate through each character of the string and only if balanced is true
    while(index < symbolString.length && balanced) {
        // symbol represents the character at a given iteration
        var symbol = symbolString[index];
        // looking for opening parenthesis and if the character is an opening parenthesis, place it in the start array
        if( symbol == "(" ){
            start.push(symbol);
        }
        // if the character is not an opening parenthesis, check to see if the start array is empty and if it is empty re-assign the balanced value to false to stop looping.
        else {
            if( start.length === 0 ){
                balanced = false;
            }
            // if the start array is not empty, that means there is a closing parenthesis 
            else if( symbol == ")" ){
                // remove the open parenthesis from the start array since there is a matching closing parenthesis
                start.pop(); // pop only if its a closing parens ************************
            }
        }
        // increment index by one to traverse to the next element in the string
        index++;
      }
    // if the string is completely balanced 
    if(balanced && start.length === 0 ) {
        // print the number of unbalanced parenthesis and return true if it is completely balanced
        console.log(0);
        return true;
    }
    else{
        // print the number of unbalanced parenthesis and return false if it is not completely balanced
        console.log(start.length);// return the size of the array
        return false;
    }
  }
parenValidator('((()))');
parenValidator('(()');
parenValidator('(())))');
parenValidator('()()((abcvd');
parenValidator('()()((abcd');
parenValidator('(a)(b)((cd');
