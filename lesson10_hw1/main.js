/*
Створіть об'єкт, що містить інформацію про користувача, таку як ім'я, вік, місце проживання тощо.
Створіть метод об'єкту для отримання та відображення цих даних.
 */
const person = {
    name: "Alice",
    age: 30,
    email: "alice@example.com",
    city: "Odesa",
    getInfo: function () {
        return `Name: ${this.name}, Age: ${this.age}, Email: ${this.email}, City: ${this.city} `;
    }
};
console.log(person.getInfo());