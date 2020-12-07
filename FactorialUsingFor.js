const prompt = require('prompt-sync')();
const number = prompt("Enter the Number : ");
let factorial=1
for( let i = 1;  i <= number;  i++ ) {
	  	factorial = factorial * i;
}
console.log("The Factorial is " +factorial);
