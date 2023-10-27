// // basic function

// function greeting() {
//   const name = prompt("What is your name");
//   console.log("Welcome to our website" + name);
// }

// // Executing the function

// greeting();

// // SIgnup function example

// function signup() {
//   const username = prompt("Enter usernane");
//   greeting();
// }

// // Executing a function inside a function

// /* You can never access a let or const that is inside a function
// exept inside the function, the acces of the variable is only within the function */

// // Adding parameters inside a function

// function login(password) {
//   console.log("Your password is" + password);
// }

// function signup() {
//   const username = prompt("Enter usernane");
//   login("robermish", 1231232);
// }

// signup();

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
