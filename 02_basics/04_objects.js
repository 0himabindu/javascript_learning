//const tinderUser = new Object()

const tinderUser = {};
tinderUser.id = "12345aa";
tinderUser.name = "hima";
tinderUser.isLoggedIn = true;

//console.log(tinderUser);

const regularUser = {
    email : "gmail.com",
    fullname: {
       userfullname: {
        fistname: "hima",
        lastname: "bindu"
       }
    }
}

//console.log(regularUser.fullname.userfullname.name);

const obj1={1:"a",2:"b"};
const obj2={3:"c",4:"d"};
const obj4={5:"c",6:"d"};
//const obj3={obj1,obj2};
//const obj3 = Object.assign({},obj1,obj2);

const obj3 = {...obj1,...obj2,...obj4};
//console.log(obj3);

const user = [
    {
        id: 1,
        name: "hima"
    },
    {
        id: 2,
        name: "hima"
    },
    {
        id: 3,
        name: "hima"
    }
]

 //console.log(user[2].name);
//  console.log(tinderUser);

//  console.log(Object.keys(tinderUser));
//  console.log(Object.values(tinderUser));
//  console.log(Object.entries(tinderUser));
//  console.log(tinderUser.hasOwnProperty("isLoggedIn"));

//object de-structering 
const course = {
    coursename: "javascript",
    courseprice: "1000",
    courseinstructor: "Naveed"
}

//course.courseinstructor

const {courseinstructor: instructor} = course
//console.log(instructor);

//API concept

// {
//    " name": "hima",
//     "coursename": "js",
//     "price": "free"
// }

[
    {},
    {},
    {},
    {},
]

