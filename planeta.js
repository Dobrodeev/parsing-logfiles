let ourPlanetEarth, userName;
nameOurPlanet = "Земля";
userName = "John";
let myPlanet = {
    name: "Earth",
    age: 6400,
    speed: 30,
    galaxy: "Milky way",
    friend: "Moon",
    getFriend: function () {
        return this.friend;
    }
}
console.log(myPlanet.getFriend());
/**
 * object Earth
 */
nameOurPlanet = "Земля";
userName = "John";
let Planet = {
    nameOurPlanet: "Земля",
    userName: "John",
    myfunction: function () {
        console.log("Hello!");
    },
    myfunction2: function () {
        console.log(this.nameOurPlanet);
    }
}
delete Planet.userName;
// console.log(Planet);
Planet.myfunction();
Planet.myfunction2();