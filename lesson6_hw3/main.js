/*
Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.
Наприклад:
const array = [1, 3, 4, 6, 2, 5, 7];
removeElement(array,4);
console.log(array); // Результат: [1, 3, 6, 2, 5, 7]
 */

const array = [1, 3, 4, 6, 2, 5, 7];

function removeElement(array, number) {
    if (array.includes(number)) {
        const indexNumber = array.indexOf(number);
        array.splice(indexNumber, 1);
    }
}

removeElement(array, 3);
removeElement(array, 2);
removeElement(array, 5);

console.log(array);