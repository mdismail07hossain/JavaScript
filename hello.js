var num = 23;
console.log(num);
// Addition two_Number
var num1 = 12;
var num2 = 32;
var sum = num1 + num2;
console.log(sum);
// Area Define Code
var a = 12;
var b = 24;
var area = a * b;
console.log(area);
// Min to convert in to Sec
var m = 7;
var s = m * 60;
console.log(s);
// Year to convert in to days
var y = 3;
var d = y * 365;
console.log("Year convert in to Days:", d);

// min into Sec
let now = new Date();
let min = now.getMinutes();
let convertsecond = min * 60;

console.log("Carrent Minutes: " + min + "m");
console.log("Minutes into Seconds: " + convertsecond + "s");

let age = prompt("Please enter your age:");

if (age >= 18) {
  console.log(age);
  console.log(true);
} else {
  console.log(false);
}

function maxfuntion(b1, b2) {
  return b1 - b2;
}
let max = maxfuntion(45, 23);
document.write(max);
document.write("<br>");
document.write("<br>");

// Bigest number

let number1 = prompt("Enter 1st number:");
let number2 = prompt("Enter 2nd number:");
let number3 = prompt("Enter 3rd number:");

if (number1 >= number2 && number1 >= number3) {
  console.log("the bigest number is 1st:" + number1);
} else if (number2 >= number1 && number2 >= number3) {
  console.log("the bigest number is 2nd number:" + number2);
} else {
  console.log("the bigest number is 3rd number :" + number3);
}

// Email valitation
let inputEmail = prompt("Enter Your Valid Email");

// email validaton with ternary operator usign includes method
/*document.write(
  inputEmail?.includes("@") && inputEmail.includes(".")
    ? "This is valid email"
    : "This is invalid email"
);

// email validation with regex validation / sir expection /
const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
document.write(
  regex?.test(inputEmail) ? "This is valid email" : "This is invalid email"
);

// the output shows as an alert
const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
regex?.test(inputEmail)
  ? alert("This is valid email")
  : alert("This is invalid email");*/

// email validation with loop methode
const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
while (!regex.test(inputEmail)) {
  inputEmail = prompt("invalid email, please enter a valid email");
}
alert("Your email is valid:", inputEmail);
