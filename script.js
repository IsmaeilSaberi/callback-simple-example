// callback = a function passed as an argument to another function

// without callback
// let total = sum(2, 5);
// displayInDOM(total);
// displayInConsole(total);
// function sum(a, b) {
//   return a + b;
// }

// with callback
sum(2, 7, displayInConsole);
sum(2, 7, displayInDOM);

function sum(a, b, callBack1) {
  let result = a + b;
  callBack1(result);
}

function displayInConsole(output) {
  console.log(output);
}

function displayInDOM(output) {
  document.getElementById("myLabel").innerHTML = output;
}
