//IMPORTS
import style from "./css/index.scss";



// VARIABLES
const minutes = document.getElementById('min');
const seconds =document.getElementById('sec');
const startBtn = document.querySelector('button');
const inputs = document.querySelectorAll('input');
const arrows = document.querySelectorAll('img');

//FUNCTIONS
function counter(){
        console.log('counter' + state.currentMinValue)
    if(state.currentMinValue>0 || state.currentSecValue>0){
  
        state.currentSecValue = +seconds.value -1;
        seconds.value = state.currentSecValue;
        state.currentSecValue = seconds.value;

        if(state.currentMinValue>0 && state.currentSecValue < 0){
            
            state.currentMinValue = +minutes.value - 1;
            minutes.value = state.currentMinValue;
            seconds.value = state.currentSecValue = 59;
            
        }
        
       setTimeout(counter,1000)
    }
    else {
        alert('The End!')
    }
};

function updateDown(){
    if(state.currentMinValue>0 && state.currentSecValue < 0){
        
        state.currentMinValue = +state.currentMinValue -1;
        minutes.value = state.currentMinValue;
        seconds.value = 59;
    }
};

function updateUp(){
    if (state.currentSecValue > 59) {
        state.currentMinValue = +state.currentMinValue +1;
        minutes.value = state.currentMinValue;
        seconds.value = 0;
        state.currentSecValue = seconds.value;
    }
};

//APP

let state = {
    currentMinValue: '',
    currentSecValue: ''
};
    //default values

state.currentSecValue = seconds.value;
state.currentMinValue = minutes.value;
minutes.value = 0;
seconds.value = 58;


    //setting input fields handling
// inputs.forEach(input => {input.addEventListener('change', e => {
    
   
//     if(e.target.id === 'sec'){
//         state.currentSecValue = +e.target.value;
//         if (state.currentSecValue === 60) {
//             state.currentMinValue = +state.currentMinValue +1;
//             minutes.value = state.currentMinValue;
//             seconds.value = 0;
//         }else if(state.currentMinValue>0 && state.currentSecValue === 0){
//             state.currentMinValue = +state.currentMinValue -1;
//             minutes.value = state.currentMinValue;
//             seconds.value = 59;
//         }
//     }else if(e.target.id === 'min'){
//         state.currentMinValue = +e.target.value;
//     }
    
// })});

arrows.forEach(arrow => {arrow.addEventListener('click', e => {

   
    if(e.target.id === 'upSec'){
        
        state.currentSecValue = +seconds.value +1;
        seconds.value = state.currentSecValue;
        state.currentSecValue = seconds.value;
        console.log(state.currentSecValue);
        updateUp();

    }else if(e.target.id === 'upMin'){
        
        state.currentMinValue = +minutes.value +1;
        minutes.value = state.currentMinValue;
        state.currentMinValue = minutes.value;
        // updateUp(); 
        
       
    }else if(e.target.id === 'downSec'){
        console.log(seconds.value)
        seconds.value = Math.abs(seconds.value);
        state.currentSecValue = +seconds.value -1;
        seconds.value = state.currentSecValue;
        state.currentSecValue = seconds.value;
       updateDown();
    }else if(e.target.id === 'downMin'){
        minutes.value = Math.abs(minutes.value);
        state.currentMinValue = +minutes.value -1;
        minutes.value = state.currentMinValue;
        state.currentMinValue = minutes.value;
        // updateDown();
    }
    
})});




    //starting App

startBtn.addEventListener('click',event=> {
    event.preventDefault();
    counter();
    

});






