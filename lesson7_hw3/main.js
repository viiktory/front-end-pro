/*
Цикл на кожній ітерації пропонує через prompt ввести число більше 100 (але максимум 10 ітерацій циклу).
Якщо відвідувач ввів число менше 100 – попросити ввести ще раз, і таке інше.
Якщо користувач вводить більше 100, текст або цикл закінчує всі ітерації, то функція виводить в консоль останні введення користувача і завершує функцію.
 */

let items = 10
for (let i = 0; i < items; i++) {
    let input = +prompt("Enter a number greater than one hundred");

    if (isNaN(input) || input <= 100) {
        alert("Enter a valid number greater than 100");
    } else {
        console.log('Your number: ' + input);
        break;
    }

    if (i === items - 1) {
        console.log('Attempts are over');
    }
}