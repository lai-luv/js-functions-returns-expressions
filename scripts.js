/***********************  Exercise 1  ************************/

// Review the following function:
function addNumbers(num1, num2) {
  return num1 + num2;
}

const sum = addNumbers(5, 3);
console.log(sum); 

// Create a variable called largerSum and assign it the value of calling the addNumbers function with new arguments. The result should be a number larger than the value of the variable, sum.





/***********************  Exercise 2 ************************/
let user1 = {
  name: 'Rose Smith',
  programmer: true,
  age: 47
};

let user2 = {
  name: 'Tabitha Daniels',
  programmer: true,
  age: 27
};

// Complete the function "greet" so that it returns the string "Welcome [NAME]! We are glad you are here." The function should be able to have user1 or user2 as an imput.

function greet(name) {
  return // your code here
}

// Call the function so that "Welcome Rose Smith! We are glad you are here." is returned from the function and stored in a variable. 


// Call the function so that "Welcome Tabitha Daniels!  We are glad you are here." is returned from the function and stored in a variable. 




/***********************  Exercise 3 ************************/
// The function below, "makeName", should take a firstName and lastName as arguments, and return the firstName and lastName separated by a space:
// e.g. makeName("Rose", "Smith") => "Rose Smith"

// Fill in the missing arguments and function body:

function makeName() { // enter the arguments between the parenthesis
  return // what should be returned?
}


// Call the function and store the value in a variable. 




/***********************  Exercise 4 ************************/

function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

const celsiusTemp = 25;
const fahrenheitTemp = celsiusToFahrenheit(celsiusTemp);
console.log("Temperature in Fahrenheit:", fahrenheitTemp);

// Refactor this code so that the user can input fahrenheit and have the function return celsius.



// Call the function with different values.




/***********************  Exercise 5 ************************/

let animals = ["monkey", "giraffe", "zebra", "rhino", "hippo"];

// Write a function called "first" that takes an array as an argument and returns the first element.






// (remove // -- from the below lines to test)
//console.log("The first animal should be monkey:", first(animals));
//console.log("The first number should be 15:", first([15, 5, 23, 30]));



/***********************  Exercise 6 ************************/

// Declare a function "bio" that takes a "user" object as an argument and returns a minimal string bio about the user. 







// (NOTE: remove // -- from the below lines to test)
// console.log("Your bio is:", bio(user));



/***********************  Exercise 7 ************************/

// Convert the following function declaration into a function expression. 

function square(num) {
  return num * num;
};

console.log(square(5)); // Output: 25
console.log(square(7)); // Output: 49



/***********************  Exercise 8 ************************/

// Convert the following function expression into a function declaration. Call the function twice with different arguments. 

const formatName = function(firstName, lastName) {
  return `${lastName}, ${firstName}`;
};

