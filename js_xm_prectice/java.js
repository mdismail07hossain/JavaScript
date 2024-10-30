// document.write("Md Ismail Hossain");

// Find Positivenumber,nagetivenumber,zeronumber in array

function myarray() {
  const arr = [34, 5, 0, -6, -4, 9, 10, 6, 0, 0, -12, 14];
  let Positivenumber = 0;
  let nagetivenumber = 0;
  let zeronumber = 0;
  let add = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      Positivenumber++;
    } else if (arr[i] < 0) {
      nagetivenumber++;
    } else if (arr[i] === 0) {
      zeronumber++;
    }
    add += arr[i];
  }
  document.write("Positivenumber are:" + " " + Positivenumber + "<br>");
  document.write("Nagetivenumber are:" + " " + nagetivenumber + "<br>");
  document.write("ZeroNumber are:" + " " + zeronumber + "<br>");
  document.write("Array all add:" + " " + add);
}

// Find prime number
function myprime() {
  let num = parseInt(prompt("Enter AnyNumber:"));
  let counter = 0;
  if (num == 0 || num == 1) {
    document.write(num + " :" + "It's Not Prime and Consept number");
  } else {
    for (let i = 2; i < num; i++) {
      if (num % i == 0) {
        counter++;
        continue;
      }
    }
    if (counter > 0) {
      document.write(num + " :" + "It's Not a Prime Number");
    } else {
      document.write(num + " :" + "It's a prime Number");
    }
  }
}

// Find factorial number
function myfactorial() {
  let fito = parseInt(prompt("Number:"));
  if (fito < 0) return undefined;

  let factorial = 1;
  for (let i = 2; i <= fito; i++) {
    factorial *= i;
  }
  document.write("The Fatorial is : " + "  " + factorial);
}

// Find fibomacci number

function myfibonacci() {
  let number = parseInt(prompt("Your Number:"));
  let num1 = 0;
  let num2 = 1;
  let sum = 0;
  document.write("Fibonacci Series:");
  for (let i = 2; i <= number; i++) {
    // if (i <= 0) {
    //   sum = i;
    // } else {
    sum = num1 + num2;
    // document.write(`${num1},${num2}: ${sum}`);
    // document.write("<br>");
    num1 = num2;
    num2 = sum;
    document.write(sum + ", ");
  }
}
//   document.write("The Number Fibonacci is:" + " " + sum);
// }

// Find small , Large and total number in the array

function mysllgto() {
  const array1 = [4, 5, 8, 68, 79, 1];
  let small = array1[0];
  let Large = array1[0];
  let total = 0;
  for (let i = 0; i < array1.length; i++) {
    if (small > array1[i]) {
      small = array1[i];
    }
    if (Large < array1[i]) {
      Large = array1[i];
    }
    total += array1[i];
  }
  document.write("Small number inthe Array:" + " " + small + "<br>");
  document.write("Large number inthe Array:" + " " + Large + "<br>");
  document.write("Total number inthe Array:" + " " + total);
}

// Find the Maximun number for three number

function mymaximum() {
  let number1st = parseInt(prompt("Enter your 1st number:"));
  let number2nd = parseInt(prompt("Enter your 2nd number:"));
  let number3rd = parseInt(prompt("Enter your 3rd number:"));
  if (number1st > number2nd && number1st > number3rd) {
    document.write(" 1st number is the Maximum number  :" + " " + number1st);
  } else if (number2nd > number1st && number2nd > number3rd) {
    document.write("2nd NUmber is the Maximum number  :" + " " + number2nd);
  } else {
    document.write("3rd Number is the Maximum number: " + " " + number3rd);
  }
}

// Find Even?odd number

function myevenodd() {
  let Input = parseInt(prompt("Enter Your number :"));
  if (Input === 0) {
    document.write("Enter a valid number:");
  } else {
    if (Input % 2 === 0) {
      document.write(`${Input}:this is the Even number`);
    } else {
      document.write(`${Input}: this is a Odd number `);
    }
  }
}

// Find Grade point

function mygrade() {
  let mark = parseInt(prompt("Enter your mark:"));
  if (mark >= 80) {
    document.write("Your Grade is : A+");
  } else if (mark >= 70) {
    document.write("Your Grade is : A");
  } else if (mark >= 60) {
    document.write("Your Grade is : A-");
  } else {
    document.write("Your Grade is : Nothing");
  }
}

// find the vowle letter
/*
let letter = prompt("Enter any letter:");
switch (true) {
    case letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u':
        document.write("It's a Vowle letter:" + " " + letter);
        break;
    default:
        document.write("It is not a Vowle letter:" + " " + letter);
}*/
