/*
Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом.
'func(" hello world", ['l', 'd'])' поверне нам "heo wor".
Вихідний рядок та символи для видалення задає користувач.
 */

const userInput = prompt('Enter a string:');
const chars = prompt('Enter characters to remove:').split(', ');

function removeChars(str, charsToRemove) {
    let strArray = str.split('');
    let resultArray = [];

    for (let i = 0; i < strArray.length; i++) {
        if (!charsToRemove.includes(strArray[i])) {
            resultArray.push(strArray[i]);
        }
    }
    return resultArray.join('');
}

const result =removeChars(userInput, chars);
console.log(result);