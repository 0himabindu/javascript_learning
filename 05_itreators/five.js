//for each loop

const coding = ["js","cpp","java","c","html"];
coding.forEach(  function (item) {
   // console.log(item);
}  )

//another variation using arrow function
coding.forEach( (val)=> {
//console.log(val);
})

function printMe(item){
    //console.log(item);
}
coding.forEach(printMe);

coding.forEach( (item,index,arr)=> {
//console.log(item,index,arr);
})

const myCoding = [         //an array having 3 objects in it 
{
langugageName : "java",
langugageFileName : "java"
},
{
langugageName : "c++",
langugageFileName : "cpp"
},
{
langugageName : "python",
langugageFileName : "py"
}, ]

myCoding.forEach( (item)=> {
 console.log(item.langugageName);
 console.log(item.langugageFileName);
})