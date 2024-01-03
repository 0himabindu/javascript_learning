const name = "hima";
const count = 12;

//console.log(name + count +" answer");
//console.log(`hello my nmae is ${name} and the repo count is ${count}`);

const gameName = new String('subway-surfers')

//methods in string
/* console.log(gameName[5]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(8));
console.log(gameName.indexOf('s')); */

const newString = gameName.substring(0,4);
//console.log(newString);

const anotherString = gameName.slice(-13, 4);
//console.log(anotherString);

const new1 = "    hima      ";
/*console.log(new1);
console.log(new1.trim());  */

const url = "htps://hima.com/hima%20bindu";
console.log(url.replace("%20","-"));
console.log(url.includes("eslavath"));
console.log(url.split(':'));