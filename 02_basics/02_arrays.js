// arrays part 2
const fruits = ["mango","banana","apple","pineapple"];
const veggie = ["tomatao","mirchi","potato","egg"];

//fruits.push(veggie);

//fruits.concat(veggie);
//console.log(fruits);

//spread,concat,push

const newValue = [...fruits, ...veggie];  //spread
//console.log(newValue);

const anotherArr = [1,2,3,[4,5,6],7,[8,9,[4,5]]];
const real_arr = anotherArr.flat(Infinity); //flat
//console.log(real_arr);

// console.log(Array.isArray("hima"));
// console.log(Array.from("hima"));
// console.log(Array.from({name: "hima"}));

let val1 = 100;
let val2 = 200;
let val3 = 300;
//console.log(Array.of(val1,val2,val3));