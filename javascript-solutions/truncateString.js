function truncateString(str, num) {
  if (num < 3){
    console.log(str.slice( 0, num ) + "..." );
  }
  else if (str.length > num){
    console.log( str.slice( 0, num - 3 ) + "..." );
  }
  else{
    console.log(str);
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
truncateString("Peter Piper picked a peck of pickled peppers", 14);
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2);
truncateString("A-", 1);
truncateString("Absolutely Longer", 2);