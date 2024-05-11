function Books() {
  this.contacts = [];

  this.findContact = function (name) {
    return this.contacts.find((contact) => contact.name === name);
  };

  this.addContact = function (name, phone, email) {
    let newContact = { name: name, phone: phone, email: email };
    this.contacts.push(newContact);
  };
}

let contactBook = new Books();

contactBook.addContact("Марія", "0950887897", "maria@gmail.com");
contactBook.addContact("Петро", "0950919199", "petro@gmail.com");

let searchName = prompt("Введіть ім'я для пошуку з великої літери:");
let foundContact = contactBook.findContact(searchName);
if (foundContact) {
  console.log("Контакт існує:", foundContact);
} else {
  console.log("Контакт з таким іменем не знайдено.");
}
