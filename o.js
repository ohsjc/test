function sayHello (words){
  var intro = "Hello, it's nice to see you. ";
  function finish (finalWords){
    return intro + words + " " + finalWords;
  }
  return finish;
}

var start = sayHello("My name is Jeremy.");
console.log(start("Its nice to meet you."));

//testing func params

function readMeParams(first, second){
  return second;
}

console.log(readMeParams("There is only one"));

//testing mutability + scopes

function Cat(color, disposition, favToy){
  this.fcolor = function(){ return color;};
  this.fdisposition = function(){ return disposition;};
  this.ffavToy = function(){ return favToy;};
}

function catChecker(cat){
  return ("This cat is " + cat.fcolor() + ", is very " + cat.fdisposition() + "and love's its " + cat.ffavToy());
}

var kitty = new Cat("Black", "Cute", "Mouse");
var grumpyKitty = new Cat("White", "Fussy", "Ball");

console.log(catChecker(kitty));
kitty.color = "orange";
console.log(catChecker(kitty));
console.log(kitty.color, kitty.fcolor());
