/*

There are eight basic JavaScript data types:

String: A sequence of characters enclosed in single or double quotes. For example, "Hello" or 'JavaScript'.
Number: A numeric value, including both integers and decimals. For example, 10, 3.14, or -100.
Bigint: An integer that can represent numbers larger than those that can be represented by the Number data type. For example, 12345678901234567890n.
Boolean: A logical value that can be either true or false. For example, true or false.
Undefined: A value that represents the absence of a value. For example, the value of a variable that has not been initialized is undefined.
Null: A value that represents the intentional absence of a value. For example, a variable that is explicitly set to null indicates that it has no value.
Symbol: A unique and immutable value that can be used as a property key. Symbols are often used as identifiers for private data or methods.
Object: A collection of key-value pairs, where each key is a string and each value can be any JavaScript data type. Objects are used to store and organize data in JavaScript.
*
Data Type	Description	Example
String	A sequence of characters	"Hello"
Number	A numeric value	10, 3.14, -100
Bigint	An integer that can represent numbers larger than those that can be represented by the Number data type	12345678901234567890n
Boolean	A logical value that can be either true or false	true, false
Undefined	A value that represents the absence of a value	undefined
Null	A value that represents the intentional absence of a value	null
Symbol	A unique and immutable value that can be used as a property key	Symbol("mySymbol")
Object	A collection of key-value pairs	{ name: "John Doe", age: 30 }
*/

/*magine a shoebox filled with various items. Each item in the box has a label that helps you identify it. This box represents an object in JavaScript, and the items inside represent the object's properties. Each property has a name (like the label on the item) and a value (like the item itself).*/

const myShoebox = {
  color: "blue",
  size: 9,
  brand: "Nike",
  laces: true,
  condition: "new",
};

console.log(myShoebox);

/*String Data Type */

const nam = "John Doe";
const greeting = "Hello, world!";

console.log(nam);
console.log(greeting);



/*Number*/ 

const age = 30;
const pi = 3.14159;
const temperature = -20;


console.log(age);
console.log(pi) ;

console.log(temperature) ;


/*Bigint:*/
const bigNumber = 12345678901234567890n;

/*Boolean*/
const isHappy = true;
const isRaining = false;

console.log(isHappy);
console.log(isRaining)



/*Undefind*/ 

let variable;
console.log(variable); // Output: undefined


/*NuLL : represent Empty Value :  tempture Empty Analogy */

const missingValue = null;


console.log(missingValue);



/*
The typeof operator in JavaScript is used to determine the data type of a value. It takes a single operand, which can be any JavaScript data type, and returns a string indicating the type of the operand.*/


console.log(typeof age);






/*What is the difference between the data types number and bigint in JavaScript?

What is the difference between the data types undefined and null in JavaScript?

How can you use the typeof operator to determine the data type of a value in JavaScript?

Write a function that takes two operands and returns the sum of the operands, but throws an error if either operand is not a number.

Explain the difference between primitive data types and reference data types in JavaScript.

Give an example of how to create an object in JavaScript and access its properties.

Explain how arrays are used to store collections of data in JavaScript.

Describe the difference between dot notation and bracket notation for accessing properties of objects in JavaScript.

Explain how to add and remove properties from an object in JavaScript.*/ 


