//Immediately Invoked Function Expression (IIFE)

function chai(){
    console.log("hima");
}
chai();  //normalfunction


(function chai1(){
    console.log("hima123");
}) () ; //named iife


//iife   ()()
// to remove global scope pollution we use iife


(  (name)=>{
    console.log(`bindu ${name}`);
})  ("hello");    //unnamed iife