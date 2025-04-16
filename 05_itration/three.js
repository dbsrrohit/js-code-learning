// for of loop

const array = [1, 2, 3, 4, 5];
for (const element of array) {
    // console.log(element);
}

const greetings = "Hello Rohit";
let num = 0
for (const char of greetings) {
    // console.log(char);
     //if the char is "o" then continue
     
     if (char == "o" && num === 0)  {
        if (num == 0) {
            console.log("this is o " + num);
            num++;
            continue
        }
        else {
         console.log("this is o " + num);
            num++;
            break
            }
          console.log("this is o " + num);
        
     }
     console.log(char);
}
