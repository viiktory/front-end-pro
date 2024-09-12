/*
Один долар коштує 26 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів
 */

let dollars = 10;
while (dollars <= 100) {
    console.log(dollars + "$ * 26 = " + dollars * 26);
    dollars += 10;
}