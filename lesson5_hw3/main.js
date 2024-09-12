/*
Дано ціле число N (ввести через prompt). Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N
 */

for (; ;) {
    let input = +prompt('Enter your number');

    if (isNaN(input) || input <= 0) {
        alert("Enter a valid number");
        continue;
    }
    for (let i = 1; i <= 100; i++) {
        let square = i * i;
        if (square > input) {
            break;
        }
        console.log("Number: " + i + " Square: " + square);
    }
    break;
}