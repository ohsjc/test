var sum = 0;
for(var i=1; i<1000; i+=1) {
  if (i % 3 === 0 || i % 5 === 0) {
    sum += i;
  }
}

console.log(sum);

//it("should add all the natural numbers below 1000 that are multiples of 3 or 5 (functional)", function () {

//var sum = FILL_ME_IN;    /* try chaining range() and reduce() */

//expect(233168).toBe(FILL_ME_IN);

Array.prototype.range = function (start, end, addBy){
  if (arguments.length < 2){
    start = 0;
    end = arguments[0];
    addBy = 1;
  }
  for (var x = start; x < end; x += addBy){
    this.push(x);
  }
  return this;
}

function removeDupes(tArray){
  for (var x = 0; x < tArray.length; x++){
    for (var y = 0; y < tArray.length; y++){
      if (tArray[x] === tArray[y] && x !== y)
      tArray.splice(x,1);
    }
  }
  return tArray;
}

var sum = [];
sum.range(0,1000,3);
sum.range(0,1000,5);
removeDupes(sum);
sum = sum.reduce(function(x,y){return x+y});
console.log(sum);
