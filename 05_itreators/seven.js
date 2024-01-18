//map
const myNum = [1,2,3,4,5,6,7,8,9,10];
const ans = myNum.map( (num) => num+10);
console.log(ans);

const usingForeach = myNum.forEach( (num1) => {
return num1+10;
})
console.log(usingForeach);