"use strict";
console.log("practice.js file was loaded");

const mixed = ["red", true, 5, 7, "white", 10, NaN, null];

let sudetis = 0;
let array = [];
let arrayText = [];
mixed.forEach(function (skaicius, idz, arr) {
  const typeOfSkaicius = typeof skaicius;

  if (typeOfSkaicius === "number") {
    sudetis += skaicius;
    array.push(skaicius);
  }
  if (typeOfSkaicius === "string") {
    arrayText.push(skaicius);
  }
});
console.log(array);
console.log(arrayText);
console.log("sudetis ===", sudetis);

// for i
// for of
// forEach;

// for (let i = 0; i < mixed.length; i++) {
//   console.log(typeof mixed[i]);
// }

// for (const tipas of mixed) {
//   console.log(typeof tipas);
// }

const nums = [1, 2, 3, 4];
let sumNums = 0;
nums.forEach((number) => {
  sumNums += number;
});
let avgNums = sumNums / nums.length;
console.log("sumNums ===", sumNums);
console.log("avgNums ===", avgNums);
console.log("nums.length ===", nums.length);
