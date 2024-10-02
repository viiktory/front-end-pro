/*
Створіть об'єкт, який матиме одну властивість з масивом об'єктів.
Які представляють контакти у вашій контактній книзі. Кожен об'єкт має містити ім'я, номер телефону та адресу електронної пошти.
Додайте метод для пошуку контакту за ім'ям та метод для додавання нових контактів.
 */

const contacts = [
    {name: 'John', phone: '3409', email: 'john@email.com'},
    {name: 'Alice', phone: '5688', email: 'alice@email.com'},
    {name: 'Viki', phone: '4421', email: 'viki@email.com'},
    {name: 'Tom', phone: '1287', email: 'tom@email.com'},
];

function searchContactByName(contacts, name) {
    let contact = contacts.find(contact => contact.name === name);
    return contact ? contact.name : 'There is no such user';
}

function addNewContacts(contacts, newContact) {
   let checkName = contacts.find(contact => contact.name === newContact.name);
    if (!checkName) {
        contacts.push(newContact);
        return "Adding new contact";
    } else {
     return "Contact already exists ";
    }
}

console.log(searchContactByName(contacts, 'Kiki'));
console.log(searchContactByName(contacts, 'Viki'));
console.log(addNewContacts(contacts,  {name: 'Lili', phone: '5490', email: 'lili@email.com'}));
console.log(addNewContacts(contacts, {name: 'Viki', phone: '4421', email: 'viki@email.com'}));
console.log(contacts);


