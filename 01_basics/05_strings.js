// String Interpolation

const   name = "Rohit"
const Age = 50

console.log(name + " your age is " + Age); // This is not acceptable way

console.log(`Hello ${name} your age is ${Age}`); // This is better


// String can be used as an object and that will give us refrence and lots of 
// // functions / methods for Prototype String {'RohitPrabhakar'}
// 0: "R"
// 1: "o"
// 2: "h"
// 3: "i"
// 4: "t"
// 5: "P"
// 6: "r"
// 7: "a"
// 8: "b"
// 9: "h"
// 10: "a"
// 11: "k"
// 12: "a"
// 13: "r"
// length: 14
// [[Prototype]]: String
// anchor: ƒ anchor()
// at: ƒ at()
// big: ƒ big()
// blink: ƒ blink()
// bold: ƒ bold()
// charAt: ƒ charAt()
// charCodeAt:  charCodeAt()
// codePointAt: ƒ codePointAt()
// concat: ƒ concat()
// constructor: ƒ String()
// endsWith: ƒ endsWith()
// fixed: ƒ fixed()
// fontcolor: ƒ fontcolor()
// fontsize: ƒ fontsize()
// includes: ƒ includes()
// indexOf: ƒ indexOf()
// isWellFormed: ƒ isWellFormed()
// italics: ƒ italics()
// lastIndexOf: ƒ lastIndexOf()
// length: 0
// link: ƒ link()
// localeCompare: ƒ localeCompare()
// match: ƒ match()
// matchAll:  matchAll()
// normalize: ƒ normalize()
// padEnd: ƒ padEnd()
// padStart: ƒ padStart()
// repeat: ƒ repeat()
// replace: ƒ replace()
// replaceAll ƒ replaceAll()
// search: ƒ search()
// slice: ƒ slice()
// small: ƒ small()
// split: ƒ split()
// startsWith: ƒ startsWith()
// strike: ƒ strike()
// sub: ƒ sub()
// substr: ƒ substr()
// substring: ƒ substring()
// sup: ƒ sup()
// toLocaleLowerCase: ƒ toLocaleLowerCase()
// toLocaleUpperCase: ƒ toLocaleUpperCase()
// toLowerCase: ƒ toLowerCase()
// toString: ƒ toString()
// toUpperCase: ƒ toUpperCase()
// toWellFormed: ƒ toWellFormed()
// trim: ƒ trim()
// trimEnd: ƒ trimEnd()
// trimLeft: ƒ trimStart()
// trimRight: ƒ trimEnd()
// trimStart: ƒ trimStart()
// valueOf: ƒ valueOf()
// Symbol(Symbol.iterator): ƒ [Symbol.iterator]()
// [[Prototype]]: Object
// [[PrimitiveValue]]: ""
// [[PrimitiveValue]]: "RohitPrabhakar"

const firstName = new String('RohitPrabhakar')

console.log(firstName[3]);
console.log(firstName.charAt(5));
console.log(firstName.length);
console.log(firstName.__proto__);
console.log(firstName.toUpperCase());
console.log(firstName.toLowerCase());
console.log(firstName.toLocaleLowerCase());
console.log(firstName.substring(0,5));



