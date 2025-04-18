const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const intialValue = 0;
const newNums = myNumbers.reduce( (acc, Cur) => { 
    // console.log(acc, Cur);
    return acc + Cur;
}, intialValue)

console.log(newNums);

const ShoppingCart = [
    { item: "JScript", price: 100 },
    { item: "Java", price: 200 },
    { item: "Python", price: 300 },
    { item: "C++", price: 400 },    
    { item: "C#", price: 500 },
    { item: "PHP", price: 600 },
    { item: "Ruby", price: 700 },
    { item: "Go", price: 800 },
]

const totalPrice = ShoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(totalPrice);

