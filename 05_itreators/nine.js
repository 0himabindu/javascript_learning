// reduce method
const array = [1,2,3];
// using function
// const total = array.reduce( function(acc,currval){
//     console.log(`acc: ${acc}, currval: ${currval}`);
//     return acc+currval
// }, 0)
// console.log(total);


//using arrow function
const total = array.reduce( (acc,currval)=> acc+currval,0);
console.log(total);

const shoppingcart = [
    {
    itemName: "js course",
    price: 100
},
    {
    itemName: "css course",
    price: 200
},
    {
    itemName: "HTML course",
    price: 50
},
    {
    itemName: "cpp course",
    price:300
},
]
const answer = shoppingcart.reduce( (acc,item) => acc+item.price,0);
console.log(answer);