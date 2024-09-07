let numberUser = prompt("Enter a three-digit number");
let realNumber = +numberUser;

let oneNumber = (Math.floor(realNumber / 100) % 10);
let twoNumber = (Math.floor(realNumber / 10) % 10);
let threeNumber = (realNumber % 10);

if (oneNumber === twoNumber && twoNumber === threeNumber) {
    console.log("All numbers are the same!");
} else if (oneNumber === twoNumber || oneNumber === threeNumber || twoNumber === threeNumber) {
    console.log("2 numbers are the same");
} else {
    console.log("No matches!");
}