// primitive data type == call by value
// 7 types: string, number, boolean, null, undefined, symbol, bigint

// javascript is dynamically typed langugage 

const score = 100
const scoreValue = 100.3

const isLoggedIn = false;
const outSideTemp = null;
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

/* console.log(id);
console.log(anotherId);
console.log(id === anotherId); */


// non-primitive data tye == reference type 
// arrays, objects, functions

const family = ["hima", "bhoopy", "nagamani", "bhashya"]

let myObj ={
    name: "bindu",
    age: 22,
}

const myFunction = function(){
console.log("Im Hima Bindu");
}

//data type sof the above declared variables
console.log(typeof score);
console.log(typeof scoreValue);
console.log(typeof isLoggedIn);
console.log(typeof outSideTemp);
console.log(typeof userEmail);
console.log(typeof id);
console.log(typeof anotherId);
console.log(typeof family);
console.log(typeof myObj);
console.log(typeof myFunction);