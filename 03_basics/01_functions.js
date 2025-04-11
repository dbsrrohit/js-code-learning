// function addTwoNumbers(number1, number2) {

//     console.log(number1 + number2);
// }

// function addTwoNumbers(number1, number2) {

//     return result = (number1 + number2)

// }


// result1 = addTwoNumbers(3,4)

// console.log(result1);


function loginUserMsg(username = "Rohit") {
    if(!username){
        console.log("Please enter a Username");
        return
    }
    return `${username} just logged in`

}

// console.log(loginUserMsg("Sangeeta"));
// console.log(loginUserMsg(""));
// console.log(loginUserMsg());

function calculateCartPrice(...num1) {
    return num1
}

// console.log(calculateCartPrice(100, 40 , 60, 700));

const user = {
    username: "rohit",
    price: 199
}

function handleObject(anyObject) {
      console.log(`Username is ${anyObject.username} and price is ${anyObject.price}` );
}

// handleObject(user)

handleObject({username:"Dev", price:999})

// Simlarly you can pass array as well

