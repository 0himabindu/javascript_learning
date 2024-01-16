//if
const isUserLoggedIn = true;
if(isUserLoggedIn){

}

//comaparison values => <,>,<=,>=,==,!=,===,!==

//const balance=1000;
//if(balance<500) console.log("less than");

// if(balance<500){
//     console.log("balance less than 500");
// } else if(balance<750){
//     console.log("balance less than 750");
// } else if(balance<900){
//     console.log("balanace less than 900");
// } else{
//     console.log("balance less than 1200");
// }

// if and else statement in real world example
const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;
if(userLoggedIn && debitCard ){
    console.log("Allow to buy courses");
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged In");
}