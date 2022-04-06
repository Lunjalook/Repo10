var myFood = {
    vegetables: "carrot",
    fruit: "orange",
    drink: "water"
};

function myFunction(myObj) {
    var vegetableValue = myFood["vegetables"];
    var fruiteValue = myFood["fruit"];
    var drinkbleValue = myFood["drink"];
    return { vegetableValue, fruiteValue, drinkbleValue };

}

console.log(myFunction(myFood));
module.exports = myFunction(myFood);