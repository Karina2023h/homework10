const person = {
  firstName: "Каріна",
  age: 24,
  location: "Полтава",
  occupation: "Розробник",

  getInfo: function () {
    console.log("Ім'я: " + this.firstName);
    console.log("Вік: " + this.age);
    console.log("Місце проживання: " + this.location);
    console.log("Ким працює: " + this.occupation);
  },
};

person.getInfo();

// const person = {
//   firstName: "Каріна",
//   age: 24,
//   location: "Полтава",
//   occupation: "Розробник",
//   getInfo: function () {
//     return `Користувач: ${person.firstName}, Вік: ${person.age}, Місце проживання: ${person.location}, Ким працює: ${person.occupation}`;
//   },
// };
// console.log(person.getInfo());
