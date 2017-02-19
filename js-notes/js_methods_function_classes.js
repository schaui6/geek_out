// js function
function hello(username){
  return "hello, " + username;
}

hello("Keyser Soze"); // "hello Keyser Soze"

// js method
var obj = {
  hello: function(){
    return "hello, " + this.username;
  },
  username: "Boo Bradley"
};

obj.hello(); // "hello, Hans Gruber"

var obj2 = {
  hello: obj.hello,
  username: "Boo Radley"
};

obj2.hello(); // "hello, Boo Radley"

var obj1 = {
  hello: hello,
  username: "Gordon Gekko"
};

obj1.hello(); // "hello, Gorder Gekko"

var obj2 = {
  hello: hello,
  username: "Biff Tannen"
};

obj2.hello(); // "hello, Biff Tannen"

hello(); // "hello, undefined"

function hello() {
  "use strict";
  return "hello, " + this.username;
}

hello(); // error: cannont read property "username" of undefined

function Uswer(name, passwordHash) {
  this.name = name;
  this.passwordHash = passwordHash;
}

var u = new User("sfalken","300f0g040ff");
u.name; // "sfalken"