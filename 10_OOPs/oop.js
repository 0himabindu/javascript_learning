//object literal
// const user = {
//     username: "Hima",
//     usercount: 10,
//     signedIn: true,

//     getUserDetails: function(){
//console.log(`got details from database`);
//console.log(this);
//     }
// }
//console.log(user.username);
//console.log(user.getUserDetails());
//console.log(this);

//constructor functions
// const promiseone = new Promise()
// const date = new Date()

function user1(username,logincount,isloggedin){
    this.username = username;
    this.logincount = logincount;
    this.isloggedin = isloggedin

    return this
}

const userOne = user1("Hima",10,true);
const usertwo = user1("Bindu",11,false);
console.log(userOne);

//when we use a new keyword then a empty object will be created and it is called as instance
// then a constructor function is called through new keyword
//this keyword will be injected in the arguments 
// and it will return this 