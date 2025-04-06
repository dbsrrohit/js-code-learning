// Primitive or Non-Primitive

// Primitive - 
// 7 type  - 
// String, Number, Boolean, Null, Undefined, Symbol, BigInt
// These are called by value and 
// a copy of these are passed and only copy is changed


// Refrence type or Non Primitive 

// Arrays, Objects, Functions

// +++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

UserOne = {
    userName: "rohit",
    Age: 23
}

UserTwo = UserOne;
console.log(UserOne.userName);
console.log(UserTwo.userName);

UserTwo.userName = "Sangeeta";

console.log(UserOne.userName);
console.log(UserOne.userName);



