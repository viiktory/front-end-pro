/*
Написати функцію, яка приймає 1 параметр. Та складає значення з тим, що передали перший раз і т. д. Все це із замиканнями, наприклад:
console.log(sum(4)); // 4
console.log(sum(6)); // 10
console.log(sum(10)); // 20
console.log(sum(7)); // 27
 */

function changeNumbers () {
    let number = 0;
    return function (sum) {
        number += sum;
        console.log(`Баланс: ${number}`);
    }
}

const change = changeNumbers()
change(4); // 4
change(6); // 10
change(10); // 20
change(7); // 27
