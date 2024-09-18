/*
Створити функцію для розрахунку добутку двох чисел, що викликається так: name(5)(2).
Функція повинна повертати результат (у середині функції не має бути консоль лога!)
 */

function productTwoNumbers(first) {
    return function (second) {
        return first * second
    }
}

console.log(productTwoNumbers(5)(2)); //10
console.log(productTwoNumbers(7)(8)); //56
console.log(productTwoNumbers(9)(0)); // 0