// find in vowle letter
function myvowle() {
  let letter = prompt("letter:");
  switch (true) {
    case letter === "a" ||
      letter === "e" ||
      letter === "i" ||
      letter === "o" ||
      letter === "u":
      window.alert("this is vowle");
      break;
    default:
      window.alert("NOt vowle");
  }
}
