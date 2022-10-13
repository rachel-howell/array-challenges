// Write a function that is given an array and each time the value is "food" it should console log "yummy". If "food" was not present in the array console log "I'm hungry" once.

function alwaysHungry(arr) {
    var foodPresent = false;
    for (var i=0; i<arr.length; i++) {
        if (arr[i] == "food") {
            console.log("yummy");
            foodPresent = true;
        }
    }
    if (foodPresent == false) {
        console.log("I'm hungry.")
    }
}

var menuItems = [3.14, "food", "pie", true, "food"];
var nonFoodItems = [1, 2, 3, 4];

alwaysHungry(menuItems);
alwaysHungry(nonFoodItems);