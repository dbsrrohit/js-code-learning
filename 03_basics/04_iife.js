// Immidiately Invoked Function Expression (IIFE)
// A function that runs as soon as it is defined

(function chai() {
    console.log("Hello");  
})(); // Hello

( chai = () => {
    console.log("Hello2");
}
)(); // Hello2 arrow function with IIFE
    
(() => {
    console.log("Hello3");
}
)(); // Hello3 arrow function with IIFE no name function

// IIFE with parameters
(function (name) {
    console.log(`Hello ${name}`);
})("John"); // Hello John