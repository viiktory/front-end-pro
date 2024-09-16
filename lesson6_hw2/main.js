/*
Дано масив з елементами різних типів.
Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.
 */

let array = [10, 3, 'String', 47, null, 20, true];

function calcArithmeticNumber(array) {
    let sum = 0;
    let count = 0;

    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'number') {
            sum += array[i];
            count++
        }
    }
    return count > 0 ? sum / count : 0;
}

console.log(calcArithmeticNumber(array));