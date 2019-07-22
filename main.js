//Variable types: String, Numbers, Boolean, null, undefined,
// const name = 'John';
// const age = 30;
// // console.log(typeof name);
// // console.log(typeof age);

// //Concatenate
// console.log('My name is ' + name + ' and I am ' + age);
// //Template String
// const hello = `My name is ${name} and I am ${age}`;
// console.log(hello);

////Variable properties & methods
// const s = 'Hello World!';
// console.log(s.length);
// console.log(s.toUpperCase());
// console.log(s.toLowerCase());
// console.log(s.substring(0, 5));
// console.log(s.substring(0, 5).toUpperCase());
// console.log(s.split(''));
//const s = 'technology, computers, it, code';
//console.log(s.split(', '));

// //Arrays - variables that hold multiple values
// const numbers = new Array(1,2,3,4,5);
// console.log(numbers);
// const fruits = ['apples', 'oranges', 'pears'];
// console.log(fruits);
// console.log(fruits[1]);
// fruits[3] = 'peaches';
// console.log(fruits);
// console.log(fruits[fruits.length-1]);
// fruits[fruits.length-1] = 'grapes';
// console.log(fruits);
// fruits.push('mangos');
// console.log(fruits);
// fruits.unshift('strawberries');
// console.log(fruits);
// console.log(Array.isArray(fruits));
// console.log(fruits.indexOf('oranges'));

//Object literals
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 Main St',
        city: 'St Louis',
        state: 'MO',
    }
}

console.log(person.address.street);
