let stringNumber = prompt("Enter any five-digit number ");
let realNumber = +stringNumber;

let oneNumber = (Math.floor(realNumber / 10_000) % 10)
let twoNumber = (Math.floor(realNumber / 1_000) % 10)
let thirdNumber = (Math.floor(realNumber / 100) % 10)
let fourthNumber = (Math.floor(realNumber / 10) % 10);
let fiveNumber = realNumber % 10;

console.log(realNumber);
console.log(`${oneNumber} ${twoNumber} ${thirdNumber} ${fourthNumber} ${fiveNumber}`);