// Basic Data Types

// string
let firstName: string = 'Hamad';
// number
let age: number = 25;
// boolean
let isAdmin: boolean = true;
// undefined
let x: undefined = undefined;
// null
let y: null = null;

// Any Type Data
let anyType;
anyType = 123;
anyType = 'anyType';
anyType = true;

// Assign Type
let anyType2: string;
// string type is assigned so another type of value can't stored
// anyType2 = 123; // can't assign number
anyType2 = 'anyType';
// anyType2 = true; // can't assign boolean

// Array
let friends: string[] = ['Mr. X', 'Mr. Y'];
// friends.push(1)
// array type is string so number can't pushed
let primeNumbers: number[] = [2, 3, 5];

// tuple --> special type of array
let coordinates: [number, number] = [1, 5];
let ageName: [number, string] = [50, 'Mr. X'];
