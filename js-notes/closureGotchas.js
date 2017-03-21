// function scoped
var a = {};
for(var i =0; i<3; i++) {
  a[i] = function(){
    alert(i);
  };
}

a[0](); //3
a[1](); //3
a[2](); //3

var a = {};
for(var i = 0; i<3; i++) {
  (function(j){
    a[j] = function(){
      alert(j);
    };
  })(i);
}

a[0](); //0
a[1](); //1
a[2](); //2