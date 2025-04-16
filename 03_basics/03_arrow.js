const user = {
    username: "John",
    age: 30,

    greet: function() {
        console.log(`${this.username},  says hello!`);
        
    }
}

// user.greet(); // John,  says hello!
// user.username = "Jane";
// user.greet(); // Jane,  says hello!

// function chai() {
//     console.log(this);
// }

// chai(); // Window

// const chai = () => {
//     console.log(this);
// }
// chai(); // Window

// Explicite return

// const addTwo = (num1, num2) =>{   
//     return num1 + num2;
// }

// console.log(addTwo(2, 3)); // 5

// Implisite return

const addTwo = (num1, num2) =>  (num1 + num2);
     
console.log(addTwo(2, 3)); // 5
    