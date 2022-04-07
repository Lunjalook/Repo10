var myPet = {
    species: "dog",
    name: "Bu",
    legs: 4,
    friends: ["Ax", "Kuku"]
};

function myFunction(myObj) {
    return myObj;
}

console.log(myFunction(myPet));
module.exports = { myPet, myFunction };
