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

// //Object literals
// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 30,
//     hobbies: ['music', 'movies', 'sports'],
//     address: {
//         street: '50 Main St',
//         city: 'St Louis',
//         state: 'MO',
//     }
// }

// console.log(person.address.street);
// console.log(person.hobbies[1]);

// //Pull values from object
// //const { firstName, lastName} = person;
// //console.log(firstName);

// const { firstName, lastName, address: { city }} = person;
// console.log(city);

// person.email = 'john@gmail.com';
// console.log(person);

// //Arrays of Objects
// const todos = [
//     {
//         id: 1,
//         text: 'Take out trash',
//         isCompleted: true
//     },
//     {
//         id: 2,
//         text: 'Meeting with boss',
//         isCompleted: true
//     },
//     {
//         id: 3,
//         text: 'Dentist appt',
//         isCompleted: false
//     }
// ];
//console.log(todos[1].text);
// const todoJSON = JSON.stringify(todos);
// console.log(todoJSON);

// //For Loop
// for(let i = 0; i <= 10; i++) {
// console.log(`For Loop Number: ${i}`);
// }

// //While Loop
// let i = 0
// while (i < 10) {
//     console.log(`While Loop Number: ${i}`);
//     i++;
// };

// //Loop through an Array
// for(let i = 0; i < todos.length; i++) {
// console.log(todos[i].text);
// }

// // For Of loop
// for (let todo of todos) {
// console.log(todo.text);
// }

//High order array methods: forEach, map, filter
// todos.forEach(function(todo) {
//     console.log(todo.text);
// });
// todos.forEach((todo) => (console.log(todo.text)));

// const todoText = todos.map(function(todo) {
//     return todo.text;
// });
// console.log(todoText);

// const todoCompleted = todos.filter(function(todo) {
//     return todo.isCompleted === true;
// }).map(function(todo){
//     return todo.text;
// });
// console.log(todoCompleted);

//Conditionals
// const x = 2;
// const y = 111;
// if(x === 10) {
//     console.log('x is 10')
// };
// if(x < 10) {
//     console.log('x is less than 10')
// } else if (x > 10 && x < 20){
//     console.log('x is between 10 and 20')
// } else {
//     console.log('x is greater than 20');
// };
// if(x < 10 && y > 20) {
//     console.log('x is less than 10 and y is greater than 20')
// };

// //Ternary operator
// const x = 11;
// // set color, if x is greater than 10 set to red, else set to blue
// const color = x > 10 ? 'red' : 'blue';
// console.log(color);

// //Switch
// const x = 4;
// // set color, if x is greater than 10 set to red, else set to blue
// const color = x > 10 ? 'red' : 'blue';

// switch(color) {
//     case 'red': 
//         console.log('color is red');
//         break;
//     case 'blue':
//         console.log('color is blue');
//         break;
//     default:
//         console.log('color is NOT red or blue');
//         break;      
// }

//Functions
// function addNums (num1 = 1, num2 = 1) {
//     return num1 + num2;
// };

// console.log(addNums(5,5));
////Arrow Function
// const addNums = (num1=1, num2=1) => num1 + num2;
// console.log(addNums(5,5));

// //Object Oriented Programing: Constructor functions ES5
// //Constructions functions should start with a capital letter.
// function Person (firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date (dob);
//     //this.getBirthYear = () => this.dob.getFullYear();
//     //this.getFullName = () => `${this.firstName} ${this.lastName}`;
// };
// Person.prototype.getBirthYear = function() {
//     return this.dob.getFullYear();
// }
// Person.prototype.getFullName = function() {
//     return `${this.firstName} ${this.lastName}`;
// };
// //Instantiate object

// const person1 = new Person ('John', 'Doe', '4-3-1980');
// const person2 = new Person ('Mary', 'Smith', '3-6-1970');
// //console.log(person1);
// //console.log(person2.dob.getFullYear());
// console.log(person1.getBirthYear());
// console.log(person1.getFullName());
// console.log(person2);

//Object Oriented Programming ES6 with Classes
// //Create a class
// class Person {
//     constructor(firstName, lastName, dob) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.dob = new Date (dob);
//     }
//     getBirthYear() {
//         return this.dob.getFullYear();
//     }
//     getFullName() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// //Instantiate object
// const person1 = new Person ('John', 'Doe', '4-3-1980');
// const person2 = new Person ('Mary', 'Smith', '3-6-1970');

// console.log(person2.getFullName());
// console.log(person1);