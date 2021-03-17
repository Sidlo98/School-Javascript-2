// const user = {
//   firstName: 'Joakim',
//   lastName: 'Wahlström',
//   age: 34,
//   email: 'Joakim@mail.com'
// }

// console.log(user);


// expoterar i node viktigt 
// module.exports = user;

class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  greet() {
    console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
  }
}

module.exports = User;