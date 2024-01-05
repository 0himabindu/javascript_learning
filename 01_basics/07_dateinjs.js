//dates

let myDate = new Date();

/* console.log(myDate);
console.log(myDate.toDateString());
console.log(myDate.toString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleString());
console.log(myDate.toUTCString());  */

//console.log(typeof myDate);

//let myCreatedDate = new Date(2023,0,23,5,3);
//let myCreatedDate1 = new Date(2023,0,23);
let myCreatedDate2 = new Date('2023-01-14');
let myCreatedDate3 = new Date('01-14-2023');

//console.log(myCreatedDate3.toLocaleString());
//console.log(myCreatedDate2.toLocaleString());

let myTimeStamp = Date.now()
//console.log(myTimeStamp);
//console.log(myCreatedDate2.getTime());
//console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getMonth());

console.log(newDate.toLocaleString('default' , {
    weekday: "long",
}));