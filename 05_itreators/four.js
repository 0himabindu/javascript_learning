const myObj = {
    js : "JavaScript",
    cpp : "c++",
    rb : "ruby",
    Html : "hypertext lang"
}

for (const key in myObj) {
   //console.log(`${key} shortcut is for ${myObj[key]}`);
}

const program = ["js","cpp","java","c","html"];
for (const key in program) {
   //console.log(program[key]);
}

const map = new Map();
map.set('IN', "India")
map.set('USA',"United states of America")
map.set('FR',"France")

for (const key in map) {
   //console.log(key);
}

//to loop on objects we have to use for in
//to loop in arrays we can use for of loops and others also

