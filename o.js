function sayHello (words){
  var intro = "Hello, it's nice to see you. ";
  function finish (finalWords){
    return intro + words + " " + finalWords;
  }
  return finish;
}

var start = sayHello("My name is Jeremy.");
console.log(start("Its nice to meet you."));

console.log("testing func params");

function readMeParams(first, second){
  return second;
}

console.log(readMeParams("There is only one"));
