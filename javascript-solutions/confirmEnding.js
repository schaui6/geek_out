function confirmEnding(str, target) {

  if (str.split(" ").length > 1){
    var lastChar = str.split(" ");
    var lastWord = lastChar[lastChar.length - 1];

    if (target.length !== lastWord.length){
      console.log(lastWord.slice(lastWord.length - target.length)  === target);
    }
    else{
      console.log(lastChar[lastChar.length - 1] === target);
    }
  }
  else{
    console.log(str[str.length -1] === target);
  }
}

// Alternate Solution
// function confirmEnding(str, target) {
//   return str.substr(-target.length) === target;
// }

confirmEnding("Bastian", "n");
confirmEnding("Connor", "n");
confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification");
confirmEnding("He has to give me a new name", "name");
confirmEnding("Open sesame", "same");
confirmEnding("Open sesame", "pen");
confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain");