let myName="hima          ";
let name1="Esalvath      ";
console.log(myName.trim().length);



let myHeroes=["thor","captian"];

let heroPower={
    thor:"hammer",
    captian:"captianweapon",

    getCaptianpower: function(){
        console.log(`the power of captian is ${this.captian} `);
    }
}

Object.prototype.hima=function(){
    console.log(`hima is presnt in all objects`);
}

heroPower.hima();


//inheritance

//old approach
const user={
    name:"hima",
    email:"hima@gmail.com"
}
const teacher ={
    makevideo:true
}
const teachingsupport={
    isavilable:false
}
const TAsupport={
makeAssignmnet:'Js Assignmnet',
fullTime: true,
__proto__:teachingsupport
}

teacher.__proto__ = user;

//morden syntax aproach 
Object.setPrototypeOf(teachingsupport,teacher);


//printing name without space length 
let anotherusername = "momdad             ";
String.prototype.trueLength=function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True length is ${this.trim().length}`);
}

anotherusername.trueLength();

anotherusername.trueLength()
"himabindu".trueLength()
"eslavath".trueLength()