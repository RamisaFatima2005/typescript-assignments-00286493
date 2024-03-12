"use strict";
function makeSandwich(...ingredients) {
    console.log("Sandwich Summary:");
    if (ingredients.length > 0) {
        console.log(ingredients.join(""));
    }
    else {
        console.log("No ingredients specified.");
    }
}
makeSandwich("Turkey", "Cheese", "Lettuce");
makeSandwich("Ham", "Swiss");
makeSandwich("Peanut Butter", "Jelly");
