/*
Маєте масив чисел.
Використовуйте вже існуючі методи масиву для створення нового масиву, в якому лише парні числа з оригінального масиву.
 */

const arr = [11, 3, 5, 6, 8, 10, 2, 4];

function evenNumbers (array){
    return array.filter(number => number % 2 === 0);
}
console.log(evenNumbers(arr));
