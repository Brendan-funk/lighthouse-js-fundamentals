const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

//while loop for printing ingredients
let counter = 0;
while(counter < ingredients.length){
  console.log(ingredients[counter]);
  counter++;
}

//for loop for printing ingredients
for(let i = 0; i < ingredients.length; i++){
  console.log(ingredients[i]);
}

//for loop for printing ingredients backwards
for(let i = ingredients.length; i >= 0;i--){
  console.log(ingredients[i]);
}