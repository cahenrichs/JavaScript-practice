'use strict';

// function calcAge(birthyear) {
//   const age = 2037 - birthyear;

//   function printAge() {
//     const output = `${firstName} you are ${age}, born in ${birthyear}`;
//     console.log(output);

//     if (birthyear >= 1981 && birthyear <= 1996) {
//       const str = `Oh, and you are a milenial, ${firstName}`;
//       console.log(str);
//     }
//   }
//   printAge();
//   return age;
// }

// const firstName = 'Clint';
// calcAge(1991);

// console.log(me);
// console.log(job);
// console.log(year);

// var me = 'Clint';
// let job = 'Web Developer';
// const year = 1991;

// console.log(addDecl(2, 3));
// console.log(addExp(2, 3));
// console.log(addArrow(2, 3));

// function addDecl(a, b) {
//   return a + b;
// }

// const addExp = function (a, b) {
//   return a + b;
// };

// var addArrow = (a, b) => a + b;

// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log('All products deleted');
// }

// const calcAge = function (birthyear) {
//   console.log(2037 - birthyear);
//   console.log(this);
// };
// calcAge(1991);

// const calcArrow = birthyear => {
//   console.log(2037 - birthyear);
//   console.log(this);
// };
// calcArrow(2001);
// const jonas = {
//   firstName: 'Jonas',
//   year: 1991,
//   calcAge: function () {
//     // console.log(this);
//     console.log(2037 - this.year);

//     const isMilenial = function () {
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };
//     isMilenial();
//   },
//   greet: () => console.log(`Hey ${this.firstName}`),
// };
// jonas.greet();
// jonas.calcAge();

// let age = 30;
// // let oldAge = age
// age = 31;
// console.log(age);
// console.log(oldAge);

// const me = {
//   firstName: 'Jonas',
//   age: 30,
// };
// const friend = me;
// friend.age = 27;
// console.log('Friend', friend);
// console.log('Me', me);
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName);
console.log(oldLastName);

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage:', jessica);
console.log('After marriage:', marriedJessica);

const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';
console.log(jessica2);
console.log(jessicaCopy);
