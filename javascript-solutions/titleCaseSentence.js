// Pseudocode
// split str into words
// iterate through words array
// split each word
// capitalize the first letter of the word
// join the word
// push new word into output array
// join output array into str

function titleCase(str){
  output = [];
  splitString = str.split(" ");
  splitString.map(function(val){
    word = val.toLowerCase().split("");
    word[0] = word[0].toUpperCase();
    word.join("");
    output.push(word.join(""));
  });
  console.log(output.join(" "));
}

titleCase("I'm a little tea pot");
titleCase("sHoRt AnD sToUt");
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT");
