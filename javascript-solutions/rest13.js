
function rot13(str) { // LBH QVQ VG!
  var word = [];
  var output = [];
  var split = str.split(" ");

  split.map(function(val){
    var splitChars = val.split("");
    splitChars.map(function(val){
      if (val.charCodeAt() > 77){
        val = val.charCodeAt() - 13;
      }
      else if (val.charCodeAt() > 26 && val.charCodeAt() < 65){
        val = val.charCodeAt(val);
    }
      else{
        val = val.charCodeAt() + 13;
      }
      word.push(String.fromCharCode(val));
      
    });
    output.push(word.join(""));
    word = [];
  });
  console.log(output.join(" "));
  return output.join(" ");
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
rot13("SERR CVMMN!");
rot13("SERR YBIR?");
rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.");


// String.fromCharCode(65, 66, 67)