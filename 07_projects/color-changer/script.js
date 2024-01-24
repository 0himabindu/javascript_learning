const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body");

//events in browser
//using if loop
// buttons.forEach(function(button){
//     button.addEventListener('click',function(e){

//     if(e.target.id === "grey"){
//         body.style.backgroundColor = "grey";
//     }
//     if(e.target.id==="white"){
//         body.style.backgroundColor="white";
//     }
//     if(e.target.id==="blue"){
//         body.style.backgroundColor="blue";
//     }
//     if(e.target.id==="yellow"){
//         body.style.backgroundColor="yellow";
//     }
//     if(e.target.id==="purple"){
//         body.style.backgroundColor="purple";
//     }
//     });
// });

//using switch case

buttons.forEach(function(button){
    button.addEventListener('click',function(e){

switch (e.target.id) {
    case "grey":
        body.style.backgroundColor = "grey";
        break;
    case "white":
        body.style.backgroundColor = "white";
        break;
    case "blue":
        body.style.backgroundColor = "blue";
        break;
    case "yellow":
        body.style.backgroundColor = "yellow";
        break;
    case "purple":
        body.style.backgroundColor = "purple";
        break;
    default:
        break;
}
    });
});