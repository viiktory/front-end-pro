/*
Дано ціле число (ввести через 'prompt').
З'ясувати, чи просто воно (простим називається число, більше 1, що не має інших дільників, крім 1 і себе).
 */

for (; ;) {
    let input = +prompt('Enter your number');

    if (isNaN(input) || input <= 1) {
        alert("Enter a valid number");
        continue;
    }
    let checkNumber = true;

    for (let i = 2; i <= input - 1; i++) {
        let remainder = input % i;
        if (remainder === 0) {
            checkNumber = false;
        }
    }
    if (checkNumber) {
        console.log("Number prime: " + input);
    } else {
        console.log("Number complex: " + input);
    }
    break;
}