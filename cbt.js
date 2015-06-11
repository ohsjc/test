var pizzas = [{name: "classic", size: 12},
              {name: "spicy", size: 16},
              {name: "Hawiaan", size: 13}];

function increaseSizeByNum (food, count){
    return food.forEach(function(object){
        object["size"] += count;
    })
}

increaseSizeByNum(pizzas, 5);

console.log(pizzas);
