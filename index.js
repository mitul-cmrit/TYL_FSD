console.log('External JavaScript Data');
// String, Number, Boolean, Symbols

console.log(typeof 'CMRIT');
console.log(typeof 123);
console.log(typeof 4.23);
console.log(typeof true);

// let, const, var
let a = 'Data 1';
var b = 'Data 2';
const c = 'Data 3';
a = 12;
b = 'New';
// c = 45;
console.log(a);
console.log(b);
console.log(c);

console.log('Hello world');

const username = 'John';
console.log('name: ', username);

let age = 25;
console.log('age: ', age);

greet();

var fruit = 'Mango';
console.log('fruit: ', fruit);
fruit = 'Apple';
console.log('fruit: ', fruit);

var name;
function greet() {
	name = 'Nikita';
	console.log('Hello ', name);
}
console.log(name);

{
}

const Greet = () => console.log('Hello world');
Greet();
