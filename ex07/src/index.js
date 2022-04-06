function myFunction(parameter) {
    var lion = {
        name: "Simba",
        legs: 4,
        tails: 1,
        roar: "roar-roar"
    };

    delete lion[parameter];
    return lion;
}

console.log(myFunction("roar"));

module.exports = myFunction;