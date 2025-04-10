// there a two methods of declaring Object
// 1. Singleton 
// object.create
// 2. Object Literals

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

// console.log(JsUser.name);
// console.log(JsUser["age"]);
// console.log(JsUser[mySym]);
// console.log(JsUser["email"]);

JsUser.email = "rohit@paaji.com"
// Object.freeze(JsUser)
JsUser.email = "sangeeta@uuloo.com"
// console.log(JsUser["email"]);

JsUser.greetings = function() {
    console.log("hello User !");
}

JsUser.greetingsTwo = function () {
    console.log(`Hello user ${this.email}`);
}
// console.log(JsUser.greetings());
JsUser.greetings();
// console.log(JsUser.greetingsTwo());
JsUser.greetingsTwo();

