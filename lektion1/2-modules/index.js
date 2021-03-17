// import user from './user'; // es6 inte helt implementerat i node ännu 20210317
// const hej = require('./user');

// console.log(hej)

const User = require('./user');

const user1 = new User('Joakim', 'Wahlström');

user1.greet();

//'----------------------------------------------------

// const names = require('./module');

// console.log(names.names);

//? bättre sätta att deconstructure man kanske inte vill hämta allt från en module.
const { names, ages } = require('./module');

console.log(names);
console.log(ages);