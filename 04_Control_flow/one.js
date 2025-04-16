// if statement

//switch statement

// switch (expression) {
//     case value1:
//         // code block
//         break;
//     case value2:
//         // code block
//         break;
//     default:
//         // code block
// }

// false values
// 0, "", null, undefined, NaN, false, -0,  0n, -0n
// true values
// "0", "false", [], {}, function() {}, true, -1, 1n, -1n, true, Symbol(), Infinity, -Infinity,

// Nullish coalescing operator , if null or undefined it will return the right side value
//  const x = null;
//  const y = "hello";
//  const z = x ?? y;
//  console.log(z); // "hello"

 // Ternary operator
     const age = 16;
        const isAdult = age >= 18 ? "Adult" : "Minor";
        console.log(isAdult); // "Adult"