// there a two methods of declaring Object
// 1. Singleton object.create

//  Object Literals
const mySym = Symbol("KeyName")
const JsUser = {
    name:"Rohit",
    [mySym]:"KeyName2",
    age: 23,
    Location: "Delhi",
    email: "rohit@dbsrtravels.com",
    isLoggedIn: false
} // This is a JsUser object is created.

console.log(JsUser.name);
console.log(JsUser["age"]);
console.log(JsUser[mySym]);



