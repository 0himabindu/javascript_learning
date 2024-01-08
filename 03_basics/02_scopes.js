// let a=10;          //global scope
// const b=20;
// var c=30;
//function scope
if(true){
    let a=10;   //block scope
    const b=20;
    var c=30;   
}

// console.log(a);
// console.log(b);
// console.log(c);

let a=300;

// for(let i=0;i<Array.length;i++){
//     const element = Array[i];
// }

function one(){
    const username = "hima";

    function two(){
        const website = "youtube";
        console.log(username);
    }
    // console.log(website);
   // two();
}
//one()

if (true){
    const username = "hima";
    if(username === "hima"){
        const website = "youtube";
       // console.log(username + website);
    }
   // console.log(website);
}
//console.log(username);

//++++++++++++++++intresting++++++++++++++++++++++++
console.log(addTwo(5));
console.log(addone(5));
function addone(num){
    return num+1;
}

// const addTwo=function(num){
//     return num+2;
// }
