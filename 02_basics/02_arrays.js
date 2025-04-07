const marvel_heros = ["thor", "Ironman", "Spiderman"]
const dc_heros = ["Superman", "flash", "Batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3]);

// const merg_heros = marvel_heros.concat(dc_heros)

// console.log(merg_heros);

const new_heros = [...marvel_heros, ...dc_heros]

console.log(new_heros);

