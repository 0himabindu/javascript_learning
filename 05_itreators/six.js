// filter 
// const coding = ["js","cpp","java","c","html"];

// const values = coding.forEach((item) => {
//    // console.log(item);
//    return item;
// })

// console.log(values);

const myNum = [1,2,3,4,5,6,7,8,9,10];

// const newNums = myNum.filter( (num) =>{
//    return  num>4
//     });

    const newNum = [];
    myNum.forEach( (num1) =>{
        if(num1>4){
            newNum.push(num1);
        }
    } )

    console.log(newNum);
//console.log(newNums);