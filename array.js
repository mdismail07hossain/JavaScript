// 1.JavaScripting program which will count how many is positive, how many negative ,how many are zero and sum up         numbers for the following array:
//         var data = [4,4,-4,-1,0,-8,0,45,9,79];
function arrayFunction() {
  var data = [4, -4, -4, -1, 10, -8, 20, -45, 9, 79];

  var positiveCount = 0;
  var negativeCount = 0;
  var zeroCount = 0;
  var sum = 0;

  for (var i = 0; i < data.length; i++) {
    var number = data[i];

    if (number > 0) {
      positiveCount++;
    } else if (number < 0) {
      negativeCount++;
    } else {
      zeroCount++;
    }

    sum += number;
  }

  window.alert("Positive Count: " + positiveCount);
  window.alert("Negative Count: " + negativeCount);
  window.alert("Zero Count: " + zeroCount);
  window.alert("Sum: " + sum);
}
// arrayFunction();
// Preime nember
// function mypreimeFunction() {
//   const pnumber = prompt("Enter your number:");
//   if (pnumber % !0) {
//     window.alert("This is Preime Number");
//   } else {
//     window.alert("Not Number");
//   }
// }
var a = 10;
if (a == a++) console.log(a);
