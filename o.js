/*function sayHello (words){
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
*/
//testing thing from js koans
var products = [
     { name: "Sonoma", ingredients: ["artichoke", "sundried tomatoes", "mushrooms"], containsNuts: false },
     { name: "Pizza Primavera", ingredients: ["roma", "sundried tomatoes", "goats cheese", "rosemary"], containsNuts: false },
     { name: "South Of The Border", ingredients: ["black beans", "jalapenos", "mushrooms"], containsNuts: false },
     { name: "Blue Moon", ingredients: ["blue cheese", "garlic", "walnuts"], containsNuts: true },
     { name: "Taste Of Athens", ingredients: ["spinach", "kalamata olives", "sesame seeds"], containsNuts: true }
  ];

//it("given I'm allergic to nuts and hate mushrooms, it should find a pizza I can eat (functional)", function () {

var productsICanEat = [];
productsICanEat = products.filter(function(x){
  return x.containsNuts === false && x.ingredients.indexOf("mushrooms") <= 0;
  });
//console.log(productsICanEat);

var ingredientCount = {};

var theIngredients = [];
theIngredients = products.map(function(x){
    return x.ingredients;
});
theIngredients = theIngredients.reduce(function(a,b){return a.concat(b);});
var shroomNumb = theIngredients.filter(function(x){return x === "mushrooms";});
ingredientCount.mushrooms = shroomNumb.length;

console.log(theIngredients);
console.log(ingredientCount);
/* chain() together map(), flatten() and reduce() */

//expect(ingredientCount['mushrooms']).toBe(2);
