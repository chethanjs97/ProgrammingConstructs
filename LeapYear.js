const prompt = require('prompt-sync')();

const year = prompt('Enter year');
if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)){
	console.log("leap year");
}
else{
	console.log("not a leap year");
}
