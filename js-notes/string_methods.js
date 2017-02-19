// indexOf() = The indexOf() method returns the index of (the position of) the first occurrence of a specified text in a string:

var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf("locate");
console.log(pos); // 7

//  lastIndexOf() = The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:

var str = "Please locate where 'locate' occurs!";
var pos = str.lastIndexOf("locate");
console.log(pos); // 21

// Both the indexOf(), and the lastIndexOf() methods return -1 if the text is not found.
// Both methods accept a second parameter as the starting position for the search.

// search() = The search() method searches a string for a specified value and returns the position of the match:
var str = "Please locate where 'locate' occurs!";
var pos = str.search("locate");
console.log(pos); // 7


// slice() = slice() extracts a part of a string and returns the extracted part in a new string.
// slice(start, end)
var str = "Apple, Banana, Kiwi";
var res = str.slice(7,13);
console.log(res); // Banana

var str = "Apple, Banana, Kiwi";
var res = str.slice(-12, -6);
console.log(res); // Banana

var res = str.slice(7);
console.log(res); // Banana, Kiwi

var res = str.slice(-12);
console.log(res); // Banana, Kiwi

// substring() = is similar to slice, but cannot accept negative numbers
var str = "Apple, Banana, Kiwi";
var res = str.substring(7,13);
console.log(res); // Banana

// substr() = is similar to slice(), but the second parameter specifies the length of the extracted part.
var str = "Apple, Banana, Kiwi";
var res = str.substr(7,6);
console.log(res); // Banana

// replace() = replaces a specified value with another value in a string:
var str = "Please visit Microsoft!";
var n = str.replace("Microsoft", "W3Schools");

// All string methods return a new string. They don't modify the original string.
// Formally said: Strings are immutable: Strings cannot be changed, only replaced.

