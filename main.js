var num = 32;
var num2 = 45;
console.log(num);

document.write("hello Ismail");

function myfuntion() {
  document.getElementById("BgColor").style.background = "black";
  document.getElementById("BgColor").style.color = "white";
}
function whitefuntion() {
  document.getElementById("BgColor").style.background = "red";
  document.getElementById("BgColor").style.color = "white";
}
function redfuntion() {
  document.getElementById("BgColor").style.background = "white";
  document.getElementById("BgColor").style.color = "black";
}
document.write("<br>");
document.write("<br>");

function devitfuntion(c1, c2) {
  return c1 - c2;
}
let dev = devitfuntion(45, 32);
document.write(dev);
document.write("<br>");
document.write("<br>");
