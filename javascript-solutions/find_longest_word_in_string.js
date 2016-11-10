function findLongestWord(str) {
  // split string into array of words
  words = str.split(" ");
  // store longest word
  var greedy = 0;
  // loop through each word
  for(var i = 0; i < words.length; i++){
    // if the letter count of the word is higher than the last highest previous word
    if(words[i].length > greedy){
      // re-assign the variable with the new higher count
      greedy = words[i].length;
    }
  }
  console.log(greedy);
}

findLongestWord("The quick brown fox jumped over the lazy dog");
