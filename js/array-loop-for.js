"use strict";
console.log("array-loop-for.js file was loaded");

const colors = ["red", "green", "blue", "white", "black"];
console.log("colors ===", colors);

console.log(colors[0]);
console.log(colors[1]);
console.log(colors[2]);

let colorsUpper = [];

for (let i = 0; i < colors.length; i++) {
  let element = colors[i];
  let elUpper = element.toUpperCase();
  // if (i === 2) continue
  // if (element = 'black') break
  console.log(elUpper);
  colorsUpper.push(elUpper);
}
console.log("colorsUpper ===", colorsUpper);

// for of
// for (let el of masyvas) {
// kiekvienas masyvo elementas yra kintamasis su pavadinimu el
// }

let liEl = document.getElementById("spalvos");
// console.log("liEl ===", liEl);

for (let element of colors) {
  let liApp = `<li>${element}</li>`;
  liEl.innerHTML += liApp;
}
