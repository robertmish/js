// // basic function

// // // Executing the function

// // SIgnup function example

// function signup() {
//   const username = prompt("Enter username");
//   greeting();
// }

// function hellothere() {
//   alert("This website uses cookies");
//   const name = prompt("What is your name");
//   alert("Hello " + name);
// }

// // Executing a function inside a function

// /* You can never access a let or const that is inside a function
// exept inside the function, the acces of the variable is only within the function */

// function username() {
//   const age = prompt("What is your age");
//   console.log(age);
// }

// username();
// // Adding parameters inside a function

function maxNumber(num1, num2) {
  if (num1 > num2) {
    alert(num1 + " is the bigger number");
  } else if (num2 > num1) {
    alert(num2 + " is the bigger number");
  }
}

const number1 = prompt("Enter the first number?");
const number2 = prompt("Enter the seccond number");

maxNumber(number1, number2);

// // The value that you pass inside a function is call arguments and you can have more than 1

// // Example

// function login(username, password) {
//   console.log("Your password is" + password);
// }

// // Javascript has a lot of built in functions, examples:

// // Generates a random number
// Math.random();

// //Returns the highest number between the 2 give parameters
// Math.max(1, 5);

// // You can also run the functions when creating variables

// const maxNumber = Math.max(35, 100);

// // Now let create our own function that returns the highest numbers

// function max(num1, num2) {
//   if (num1 > num2) {
//     return num1;
//   } else {
//     return num2;
//   }
// }

// let greaterNumber = max(10, 20);

// console.log(greaterNumber);
