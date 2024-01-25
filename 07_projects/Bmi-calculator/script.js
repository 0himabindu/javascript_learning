const form = document.querySelector('form');
form.addEventListener('submit', function(e){
    e.preventDefault();

   const height = parseInt(document.querySelector('#height').value);
   const weight = parseInt(document.querySelector('#weight').value);
   const results = document.querySelector('#results');

   if(height === '' || height<0 || isNaN(height)){
     results.innerHTML =` please give a valid number ${height}`;
   } else if(weight === '' || weight<0 || isNaN(weight)){
     results.innerHTML =` please give a valid number ${weight}`;
   } else{
   const bmi = (weight/((height*height)/10000)).toFixed(1);
   //to show result
   if(bmi<=18.6){
    results.innerHTML = `under weight ${bmi}`;
   }
   else if( 18.6<bmi<24.9){
    results.innerHTML = `Normal Range ${bmi}`;
   }
   else if(bmi>24.9){
    results.innerHTML = `overweight ${bmi}`;
   }
   }
})