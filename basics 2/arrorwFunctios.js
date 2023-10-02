// Arrow functions.

// "use strict"
x = 10;

// const user = {
//     username: "Pabitra",
//     age: 19,

//     welcomeMessage: function(){
//         console.log(`Welcome to the site, ${this.username}-kun.`);
//         console.log(this);
//     }
// }

// user.welcomeMessage()
// user.username = "Sam";
// user.welcomeMessage()
// console.log(this)


// Arrow function

const chai = () => {
    console.log("Drink Chai")
}

chai()

const addTwo = (num1, num2) => num1+num2;
console.log(addTwo(3,6))