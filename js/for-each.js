"use strict";
console.log("for-each.js file was loaded");

const colors = ["red", "green", "blue", "white", "black"];

for (let spalva of colors) {
  console.log("spalva ===", spalva);
}

//arr.forEach((el, index, arr) => {function body})
const colUpper = [];
colors.forEach(function (spalva, idx, arr) {
  console.log("spalva ===", spalva);
  colUpper.push(spalva.toUpperCase());
});
console.log("colUpper ===", colUpper);

const nums = [5, -7, 1, -8, 7, 15, -8, 2, -7];
const mixed = ["red", true, 5, 7, "white", 10];
// su forEach
// atspausdinti visus skaicius
// atspausdinti tik teigiamus skaicius

nums.forEach(function (skaicius, idx, arr) {
  if (skaicius > 0) {
    console.log("skaicius ===", skaicius);
  }
});
let sudetis = 0;
mixed.forEach(function (skaicius, idz, arr) {
  const typeOfSkaicius = typeof skaicius;

  if (typeOfSkaicius === "number") {
    sudetis += skaicius;
  }
});
console.log("sudetis ===", sudetis);

const liElList = document.querySelectorAll("#spalvos li");
console.log("liElList ===", liElList);

liElList.forEach((liEl) => {
  // liEl.textContent += "-spalva";
  liEl.style.backgroundColor = liEl.textContent;
});
