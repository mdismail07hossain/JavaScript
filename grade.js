const grade = prompt("enter your mark");
const Grade = prompt("enter total mark:");
const gradepresent = (grade / Grade) * 100;
console.log(gradepresent);
if (gradepresent >= 80) {
  window.alert("your grade is : A+");
} else if (gradepresent >= 70) {
  window.alert("your grade is :B+");
} else if (gradepresent >= 60) {
  window.alert("your grade is :C+");
} else {
  window.alert("you have no grade: fall");
}
