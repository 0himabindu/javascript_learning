const user1 ={
 usernmae: "hima",
 price: 100,
 welcomemsg: function(){
    console.log(`Welcome ${this.usernmae}, welcome to youtube`);
    console.log(this);
 }

}

// user1.welcomemsg();
// user1.usernmae="bindu"
// user1.welcomemsg();

//normal function
// const chai = function(){
//     let usernmae = "hima"
//     console.log(this.usernmae);
// }

//arrow function
const chai = () =>{
    let usernmae = "hima"
    console.log(this);
}
// chai()

// const addtwo = (num1,num2) =>{
// return num1+num2;
// }

// const addtwo = (num1,num2) => num1+num2;

//const addtwo = (num1,num2) => (num1+num2);
const addtwo = (num1,num2) => (num1+num2);

console.log(addtwo(3,4));