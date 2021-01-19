import style from "./css/index.scss"

const minutes = document.getElementById('min');
const seconds =document.getElementById('sec');
const btn = document.querySelector('button');

minutes.defaultValue = 0;
seconds.defaultValue = 0;

let currentSecValue = seconds.value;
let updatedSecValue;
let currentMinValue = minutes.value;
let updatedMinValue;



function counter(){
    // seconds.addEventListener('change', e => {
    //     if(currentMinValue>minutes.getAttribute('min')){
                
    //         updatedMinValue = parseInt(currentMinValue)-1;
    //         minutes.setAttribute('value', parseInt(currentMinValue)-1);
    //         currentMinValue = updatedMinValue;
    //         updatedSecValue = 59; 
    // })

    if( seconds.value>0){
       
        currentSecValue = seconds.value;
        updatedSecValue = currentSecValue -1;
        seconds.disabled = true;

        currentSecValue = updatedSecValue;
        seconds.value = currentSecValue;
        
        



       setTimeout(counter,1000)
    }
    else {
        alert('The End!')
        seconds.disabled = false;
    }
};



   seconds.addEventListener('change', e => {


       if(e.target.value === seconds.getAttribute('max')){
    
        
        updatedMinValue = parseInt(currentMinValue)+1
        minutes.setAttribute('value', parseInt(currentMinValue)+1);
        currentMinValue = updatedMinValue;
        e.target.value = 0;   
    }
    
        // if(e.target.value === seconds.getAttribute('min')){

        //     if(currentMinValue>minutes.getAttribute('min')){
                
        //         updatedMinValue = parseInt(currentMinValue)-1;
        //         minutes.setAttribute('value', parseInt(currentMinValue)-1);
        //         currentMinValue = updatedMinValue;
        //         e.target.value = 59;
             
        //     }
        // }
        
        
        
    
   });

   minutes.addEventListener('change', e => {
        updatedMinValue = e.target.value;
        currentMinValue = updatedMinValue;

   });

    



btn.addEventListener('click',event=> {
    event.preventDefault();
    counter();

});
