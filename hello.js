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
