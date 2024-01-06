//Arrays

const myArray = [0,1,2,3];
//console.log(myArray);

const myFamily = ['hima','bhoopy','nagamani','bhashya']
//console.log(myFamily);

const newArray = new Array(1,2,3,4,5);
//console.log(newArray);
//console.log(myArray[2]);


//Array Methods
//push,pop method
//myArray.push(6);
//myArray.push(7);
//myArray.pop();
//console.log(myArray);

//unshift,shift =>unshift adds at the starting and shift delets the first element
//myArray.unshift(9);
//myArray.shift()
//console.log(myArray);

//console.log(myArray.includes(9));
//console.log(myArray.indexOf(3));

const Arr = myArray.join()
//console.log(Arr);
//console.log(typeof Arr);

//slice, splice
console.log("A ",myArray);
const myn1 = myArray.slice(1,3);
console.log(myn1);
console.log("B ",myArray);

const myn2 = myArray.splice(1,3);
console.log("C ",myArray);
console.log(myn2);

