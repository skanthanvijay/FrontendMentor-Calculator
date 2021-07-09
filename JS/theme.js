// Variables

var toggle1 = document.querySelector(".t1");
var toggle2 = document.querySelector(".t2");
var toggle3 = document.querySelector(".t3");
var body = document.querySelector("body");
var calcHeading = document.querySelector(".calc-heading");
var calcScreen = document.querySelector(".calc-screen-container");
var calcBody = document.querySelector(".calc-body-container");
var toggle = document.querySelector(".button-cont")
var button = document.querySelectorAll(".calc-button");
var wButton = document.querySelectorAll(".worded-button");
var eButton = document.querySelector(".equals");


// Buttons

toggle1.addEventListener("click", function () {
  toggleTheme1();
});

toggle2.addEventListener("click", function () {
  toggleTheme2();
});

toggle3.addEventListener("click", function () {
  toggleTheme3();
});


// Button Functions

function toggleTheme1() {

  toggle1.classList.add("visible");
  toggle2.classList.remove("visible");
  toggle3.classList.remove("visible");

  body.classList.add("bodytheme1");
  body.classList.remove("bodytheme2");
  body.classList.remove("bodytheme3");

  calcHeading.classList.add("calc-text1-t1");
  calcHeading.classList.remove("calc-text1-t2");
  calcHeading.classList.remove("calc-text1-t3");

  calcScreen.classList.add("calc-text1-t1", "calcS-cont-t1");
  calcScreen.classList.remove("calcS-cont-t2");
  calcScreen.classList.remove("calc-text1-t3", "calc-cont-t3");

  calcBody.classList.add("calc-cont-t1");
  calcBody.classList.remove("calc-cont-t2");
  calcBody.classList.remove("calc-cont-t3");

  toggle.classList.add("calc-cont-t1");
  toggle.classList.remove("calc-cont-t2");
  toggle.classList.remove("calc-cont-t3");

  for (let b of button) {
  b.classList.add("cB-t1");
  b.classList.remove("calc-text1-t2", "cB-t2");
  b.classList.remove("calc.text1-t3", "cB-t3");}


  for (let w of wButton) {
  w.classList.add("wB-t1");
  w.classList.remove("calc-text1-t1", "wB-t2");
  w.classList.remove("wB-t3");}

  eButton.classList.add("e1");
  eButton.classList.remove("e2");
  eButton.classList.remove("e3");
}

function toggleTheme2() {

  toggle1.classList.remove("visible");
  toggle2.classList.add("visible");
  toggle3.classList.remove("visible");

  body.classList.remove("bodytheme1");
  body.classList.add("bodytheme2");
  body.classList.remove("bodytheme3");

  calcHeading.classList.remove("calc-text1-t1");
  calcHeading.classList.add("calc-text1-t2");
  calcHeading.classList.remove("calc-text1-t3");

  calcScreen.classList.remove("calc-text1-t1", "calcS-cont-t1");
  calcScreen.classList.remove("calc-text1-t3", "calc-cont-t3");
  calcScreen.classList.add("calcS-cont-t2");

  calcBody.classList.remove("calc-cont-t1");
  calcBody.classList.remove("calc-cont-t3");
  calcBody.classList.add("calc-cont-t2");

  toggle.classList.remove("calc-cont-t1");
  toggle.classList.remove("calc-cont-t3");
  toggle.classList.add("calc-cont-t2");

  for (let b of button) {
  b.classList.remove("cB-t1");
  b.classList.remove("calc.text1-t3", "cB-t3");
  b.classList.add("calc-text1-t2", "cB-t2");}


  for (let w of wButton) {
  w.classList.remove("wB-t1");
  w.classList.remove("wB-t3");
  w.classList.add("calc-text1-t1", "wB-t2");}

  eButton.classList.remove("e1");
  eButton.classList.remove("e3");
  eButton.classList.add("e2");
}

function toggleTheme3() {

  toggle1.classList.remove("visible");
  toggle2.classList.remove("visible");
  toggle3.classList.add("visible");

  body.classList.remove("bodytheme1");
  body.classList.remove("bodytheme2");
  body.classList.add("bodytheme3");

  calcHeading.classList.remove("calc-text1-t1");
  calcHeading.classList.remove("calc-text1-t2");
  calcHeading.classList.add("calc-text1-t3");

  calcScreen.classList.remove("calc-text1-t1", "calcS-cont-t1");
  calcScreen.classList.remove("calcS-cont-t2");
  calcScreen.classList.add("calc-text1-t3", "calc-cont-t3");

  calcBody.classList.remove("calc-cont-t1");
  calcBody.classList.remove("calc-cont-t2");
  calcBody.classList.add("calc-cont-t3");

  toggle.classList.remove("calc-cont-t1");
  toggle.classList.remove("calc-cont-t2");
  toggle.classList.add("calc-cont-t3");

  for (let b of button) {
  b.classList.remove("cB-t1");
  b.classList.remove("calc-text1-t2", "cB-t2");
  b.classList.add("calc.text1-t3", "cB-t3");}


  for (let w of wButton) {
  w.classList.remove("wB-t1");
  w.classList.remove("calc-text1-t1", "wB-t2");
  w.classList.add("wB-t3");}

  eButton.classList.remove("e1");
  eButton.classList.remove("e2");
  eButton.classList.add("e3");
}
