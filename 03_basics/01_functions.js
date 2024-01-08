function namerepeat(){
    console.log("h");
    console.log("i");
    console.log("m");
    console.log("a");
    console.log("E");
}

//namerepeat();

// function addTwoNumbers (num1 , num2){
//     console.log(num1 + num2);
// }
// addTwoNumbers(4575,48542)


function addTwoNumbers (num1 , num2){
   let result = num1+num2;
  // console.log("Hima");
   return result;
}
  
   const result = addTwoNumbers(3,4);
 //  console.log("Result :", result);

 function loginuser(username="bindu"){
   if(username===undefined){
      //console.log("please enter username");
      return
   }
   return `${username} just logged in`
 }
//  console.log(loginuser("Hima"));
// console.log(loginuser());

//in shopping cart
function caluculateCartPrice(...num1){
   return num1;
}
//console.log(caluculateCartPrice(200,400,500,20000));

function handleObject(anyobject){
   console.log((`username is ${anyobject} and the price is ${anyobject}`));
}
handleObject({
   username: "hima",
   price: 100
});

const myArray = [100,200,300,400,500]

function returnSecondValue(getArray){
   return getArray[1]
}

console.log(returnSecondValue(myArray));
console.log(returnSecondValue([200,400,500,1000]));