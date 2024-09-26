/*
Створити ladder (сходи) – об'єкт, який дозволяє підніматися вгору та спускатися.
Змініть код методів up, down і showStep таким чином, щоб їх виклик можна було зробити по ланцюжку, наприклад:
ladder.up().up().down().showStep(); // 1
 */

let ladder = {
    current: 0,
    up: function () {
        this.current++;
        return this;
    },
    down: function () {
        this.current--;
        return this;
    },
    showStep: function () {
        console.log(this.current);
        return this;
    }
};

ladder.up().up().up().down().showStep(); // 2
