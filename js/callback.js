"use strict";
console.log("callback.js file was loaded");

function printValue(val) {
  console.log("val ===", val);
}
function alertValue(val) {
  alert(val);
}
function valueToHtml(val) {
  const h2El = document.createElement("h2");
  h2El.textContent = val;
  document.body.append(h2El);
}

const rez = "Laba diena";

function sum(sk1, sk2, callbackFn) {
  const sum = sk1 + sk2;
  callbackFn(sum);
}

sum(15, 35, valueToHtml);
