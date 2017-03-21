DOT = function(obj, prop){
  if(obj.hasOwnProperty(prop)) {
    // return it
    return obj[prop];
  }
    // otherwise keep walking up the proto chain
  else if {
    return DOT(obj.__proto__, prop );
  }
  // else {
  //   return undefined;
  // }
};