const coding = ["js", "php", "css", "html", "python"];

// const values = coding.forEach((item) => {
//     console.log(item);
//     return item;
//     // Doesnot return anything
//     // return undefined
// }
// );

// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.filter((num) => num > 5);

const newNums = []

// myNums.forEach((num) => {
//     if (num > 5) {
//         newNums.push(num);
//     }
// }
// );
// myNums.forEach((num) => num > 5 ? newNums.push(num) : null);

//  console.log(`this ${newNums}`);


const books = [
    { title: 'Book 1', author: 'Author 1', year: 2000 },
    { title: 'Book 2', author: 'Author 2', year: 2005 },
    { title: 'Book 3', author: 'Author 3', year: 2010 },
    { title: 'Book 4', author: 'Author 4', year: 2015 },
    { title: 'Book 5', author: 'Author 5', year: 2020 },

]

const userBooks = books.filter((book) => book.year >= 2010 && book.title === 'Book 3');

console.log(userBooks);