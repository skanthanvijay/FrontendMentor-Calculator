// Adding Inputted Digits To Screen

var numpad = document.querySelectorAll(".numpad");

for (let i = 0; i < numpad.length; i++) {

  numpad[i].addEventListener("click", function () {

    var numpadNumber = this.innerHTML;

    addToScreen(numpadNumber);
    });
}

function addToScreen(number) {

  var screenNumberOld = document.querySelector(".calc-screen").innerText;
  var decimalPoints = screenNumberOld.split('.').length - 1;
  var leadingNum = screenNumberOld.charAt(0);

  if (decimalPoints < 1 || number !== ".") {

    if (leadingNum === "0" && number !== "." && screenNumberOld.charAt(1) !== ".") {
      document.querySelector(".calc-screen").innerText = number;
    }

    else {
    document.querySelector(".calc-screen").innerText = (screenNumberOld + number);
    }}}


// Removing Digits From Screen

var del = document.querySelector(".delete");

del.addEventListener("click", function() {

  var screenNumberOld = document.querySelector(".calc-screen").innerText;
  var textCount = document.querySelector(".calc-screen").innerText.length;

  if (textCount < 2) {
  document.querySelector(".calc-screen").innerText = "0";
  }

  else {
    document.querySelector(".calc-screen").innerText = screenNumberOld.slice(0, -1);
  }});


// Operation Inputs

var num1 = 0;
var operation = "";

var inputOperator = document.querySelectorAll(".operator");

for (let i = 0; i < inputOperator.length; i++) {

  inputOperator[i].addEventListener("click", function () {

    operation = this.innerHTML;
    num1 = Number(document.querySelector(".calc-screen").innerText);

    document.querySelector(".calc-screen").innerText = "0";
  });}


// Operation Output

var output = document.querySelector(".equals");

output.addEventListener("click", function() {

  var num2 = Number(document.querySelector(".calc-screen").innerText);
  var numAnswer = 0;
  var numAnswerRaw = 0;

  if (operation === "+") {
    numAnswerRaw = num1 + num2;
    numAnswer = numAnswerRaw.toFixed(6);
    document.querySelector(".calc-screen").innerText = numAnswer;
  }

  else if (operation === "-") {
    numAnswerRaw = num1 - num2;
    numAnswer = numAnswerRaw.toFixed(6);
    document.querySelector(".calc-screen").innerText = numAnswer;
  }

  else if (operation === "x") {
    numAnswerRaw = num1 * num2;
    numAnswer = numAnswerRaw.toFixed(6);
    document.querySelector(".calc-screen").innerText = numAnswer;
  }

  else if (operation === "/") {
    numAnswerRaw = num1 / num2;
    numAnswer = numAnswerRaw.toFixed(6);
    document.querySelector(".calc-screen").innerText = numAnswer;
  }

});


// Reset Button

var reset = document.querySelector(".reset");

reset.addEventListener("click", function() {

  num1 = 0;
  operation = "";

  document.querySelector(".calc-screen").innerText = "0";

});
