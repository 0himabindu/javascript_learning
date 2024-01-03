// there are 3 types of variables var, let, const and without these also we can create a variable
//prefer not to use var coz it have issues in block scope and functional scope
//the best variable to use is let

const accountId = 14453   //cant be changed later
let accountEmail = "himaeslavath@gmail.com"
var accountPassword = "123450"
accountCity = "Hyderabad"  //without let,var,const
let accountState;

accountEmail = "hima@gmail.com"
accountPassword = "45678"
accountCity = "ECIL"
console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])