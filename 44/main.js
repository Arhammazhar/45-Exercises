"use strict";
//make a function
function sandwitch(ingredients) {
    console.log("\nThese are the ingredients of your sandwitch:");
    ingredients.forEach(ingredient => console.log(ingredient));
}
//declare variable to store value of function
let ingredientNames1 = ["Chicken", "chilli garlic sauce", "lettuce"];
let ingredientNames2 = ["Mayo", "chilli garlic sauce", "lettuce", "boiled egg"];
let ingredientNames3 = ["Mayo", "chilli garlic sauce", "lettuce", "Chicken", "Cheeze", "fried egg"];
//call the function three times using different number of arguments
sandwitch(ingredientNames1);
sandwitch(ingredientNames2);
sandwitch(ingredientNames3);
