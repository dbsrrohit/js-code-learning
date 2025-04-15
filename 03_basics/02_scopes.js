function outerFunction() {
    let outerVar = "I am in the outer function";

    function innerFunction() {
        // console.log(outerVar); // Accessible due to lexical scoping
    }

    innerFunction();
}

outerFunction();

// Example of block scope
if (true) {
    let blockScopedVar = "I am block scoped";
    // console.log(blockScopedVar); // Accessible here
}
// console.log(blockScopedVar); // Uncaught ReferenceError: blockScopedVar is not defined
// Example of function scope
function functionScoped() {
    var functionScopedVar = "I am function scoped";
    // console.log(functionScopedVar); // Accessible here
}
functionScoped();
// console.log(functionScopedVar); // Uncaught ReferenceError: functionScopedVar is not defined

//lexical scope
// Lexical scope refers to the visibility of variables based on their location within the source code.
// In JavaScript, functions are lexically scoped, meaning that they can access variables from their own scope and the scopes of their parent functions.
// This is a fundamental concept in JavaScript that allows for closures and encapsulation of variables.
// Lexical scope is determined at the time of writing the code, not at runtime.
// This means that inner functions have access to the variables of their outer functions, even after the outer function has finished executing.
// Example of lexical scope
function outerFunction() {
    let outerVar = "I am in the outer function";

    function innerFunction() {
        // console.log(outerVar); // Accessible due to lexical scoping
    }

    innerFunction();
}
outerFunction();

// Example of closure
function makeCounter() {
    let count = 0;

    return function() {
        count++;
        return count;
    };
}
const counter = makeCounter();
// console.log(counter()); // 1
// console.log(counter()); // 2
// console.log(counter()); // 3    

function one() {
    const Username = "John Doe";

    // console.log(Username); // John Doe
    function two() {
        const webname = "Jane.com";
        // console.log("inside two()" + Username); // John Doe
        // console.log(webname); // Jane.com
    }
    // console.log(webname); // Uncaught ReferenceError: webname is not defined
    two();
}
one();
//console.log(Username); // Once out of function one - Uncaught ReferenceError: Username is not defined

