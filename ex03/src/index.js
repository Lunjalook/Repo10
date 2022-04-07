var myFood = {
    vegetables: "carrot",
    fruit: "orange",
    drink: "water"
};

function myFunction(myObj) {
    var vegetableValue = myFood["vegetables"];
    var fruitValue = myFood["fruit"];
    var drinkbleValue = myFood["drink"];
    return { vegetableValue, fruitValue, drinkbleValue };

}

console.log(myFunction(myFood));
module.exports = myFunction(myFood);