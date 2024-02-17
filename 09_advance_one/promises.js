const promiseOne = new Promise(function(resolve,reject){
//Do an async task
//DB calls, cryptography, network
setTimeout(function(){
console.log('Async task is complete');
resolve()
},1000)
});

promiseOne.then(function(){
    console.log("Promise comsumed");
})

// easy to create and consume 
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async take 2");
        resolve();
    },1000)
}).then(function(){
    console.log("Async to resolved");
})

//resolev is directly connected to then
const promiseThree =  new Promise(function(resolve,reject){
setTimeout(function(){
resolve({username: "hima", email: "hima@gmail.com"});
},1000)
})

promiseThree.then(function(user){
console.log(user);
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:"Bindu", password:"12345"});
        }
        else{
            reject("ERROR: Something went wrong");
        }
    },1000)
})

promiseFour.
then((user)=>{
console.log(user);
return user.username;
}).then((username)=>{
console.log(username);
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
console.log("The Promise id Either resolved or rejected");
})

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:"Javascript", password:"12345"});
        }
        else{
            reject("ERROR: JS went wrong");
        }
    },1000)
})

// async function consumePromiseFive(){
//     const response = await promiseFive;
//     console.log(response);
// }

async function consumePromiseFive(){
    try {
        const response = await promiseFive;
    console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// async function getAllUsers(){
// const response = await fetch('https://api.github.com/users/0himabindu')
//  const data = response.JSON;
//  console.log(data);
// }
// getAllUsers()

// async function getAllUsers(){
//    try {
//     const response = await fetch('https://api.github.com/users/0himabindu')
//     const data = await response.JSON;
//     console.log(data);
//    } catch (error) {
//     console.log("E:",error);
//    }
//     }
//     getAllUsers()

//using then and catch

fetch('https://api.github.com/users/0himabindu')
.then((answer)=>{
return response.json()
})