// var num = 32;
// var num2 = 45;
// console.log(num);

// document.write("hello Ismail");

// function myfuntion() {
//   document.getElementById("BgColor").style.background = "black";
//   document.getElementById("BgColor").style.color = "white";
// }
// function whitefuntion() {
//   document.getElementById("BgColor").style.background = "red";
//   document.getElementById("BgColor").style.color = "white";
// }
// function redfuntion() {
//   document.getElementById("BgColor").style.background = "white";
//   document.getElementById("BgColor").style.color = "black";
// }
// document.write("<br>");
// document.write("<br>");

// function devitfuntion(c1, c2) {
//   return c1 * c2;
// }
// let dev = devitfuntion(45, 32);
// document.write(dev);
// document.write("<br>");
// document.write("<br>");
// console.log(dev);
// console.log("my today java work complet");

// const n1 = 45;
// const n2 = 35;
// if (n1 > n2) {
//   document.write("NUmber num is big " + n1);
// } else {
//   document.write("number num1 is big:" + n2);
// }
// if (n1 >= n2) {
//   document.write("ok");
// } else {
//   document.write("try again");
// }

// Array all mathods use
// push mahtods
let arr = ["ismail", "munna", "rajib"];
console.log(arr);
arr.push("rafi", "ali", "mirza", "aminul");
console.log(arr);

// pop mathods

arr.pop();
console.log(arr);

// shift methods

arr.shift();
console.log(arr);

// unshift methods

arr.unshift("ismial", "akon");
console.log(arr);

// slice mathods

let narr = arr.slice(-7, -2);
console.log(narr);

// splice mathods

narr.splice(1, 3, "hasan", "habib");
console.log(narr);

const bd = "bangladesh";
let newbd = Array.from(bd);
console.log(newbd);

let BD = newbd.join("_");
console.log(BD);

let hello = BD.replace(/_/g, "");
console.log(hello);
