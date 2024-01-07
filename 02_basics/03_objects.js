// singleton if we will create constructor then singleton will also be formed
// if we will create literal then singleton will not be formed


//object literals
const sym = Symbol("key1")

const jsUser = {
    name: "Hima Bindu",
    "full name": "Eslavath",
    age: 18,
    [sym]: "newsymbol",
    location: "hyderabad",
    email: "hima@gmail.com",
    isLoggedIn: true,
    lastLoginDays: ["tuesday","sunday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(typeof jsUser.sym1);

jsUser.email= "@gmail.com";
//Object.freeze(jsUser);   //after this we cant change the values
jsUser.email= "eslavth@gmail.com";
//console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello Im hima bindu");
}

//console.log(jsUser.greeting());

jsUser.greeting2 = function(){
    console.log(`hello Im,${this.name}`);
}

//console.log(jsUser.greeting2());