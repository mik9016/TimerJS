//IMPORTS
import style from "./css/index.scss";



// VARIABLES
const minutes = document.getElementById('min');
const seconds =document.getElementById('sec');
const startBtn = document.querySelector('button');
const inputs = document.querySelectorAll('input');
const arrows = document.querySelectorAll('img');
const resetBtn = document.getElementById('reset');
const upArrows = document.getElementsByClassName('up');
const downArrows = document.getElementsByClassName('down');


//FUNCTIONS
function counter(){
       
        state.currentSecValue = seconds.value;
        state.currentMinValue = minutes.value;
    if(state.currentMinValue > 0 || state.currentSecValue > 0){
  
        state.currentSecValue = +seconds.value -1;
        seconds.value = state.currentSecValue;
        state.currentSecValue = seconds.value;

        if(state.currentMinValue>0 && state.currentSecValue < 0){
            
            state.currentMinValue = +minutes.value - 1;
            minutes.value = state.currentMinValue;
            seconds.value = state.currentSecValue = 59;
            
        }
        
        setTimeout(counter,1000);
    }
    else {
        if(state.resetbtnclicked === true){
            state.resetbtnclicked = false;
            
        }else{
            alert('The End!');
           
        }
        
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
    currentSecValue: '',
    resetbtnclicked: false,
    counterWorking: false
};
    //SETTING DEFAULT VALUES 

state.currentSecValue = seconds.value;
state.currentMinValue = minutes.value;
minutes.value = 0;
seconds.value = 0;

    //HANDLING SETTING VALUES BY ARROWS
    arrows.forEach(arrow => {arrow.addEventListener('click', e => {
     
   
        if(e.target.id === 'upSec'){
            
            state.currentSecValue = +seconds.value +1;
            seconds.value = state.currentSecValue;
            state.currentSecValue = seconds.value;
            updateUp();
    
        }else if(e.target.id === 'upMin'){
            
            state.currentMinValue = +minutes.value +1;
            minutes.value = state.currentMinValue;
            state.currentMinValue = minutes.value;
            
           
        }else if(e.target.id === 'downSec'){
    
                state.currentSecValue = seconds.value;
                seconds.value = state.currentSecValue;
                state.currentSecValue = +seconds.value -1;
                seconds.value = state.currentSecValue;
                state.currentSecValue = seconds.value;
                seconds.value = Math.abs(seconds.value);
                updateDown();     
        }else if(e.target.id === 'downMin'){
            
            state.currentMinValue = +minutes.value -1;
            minutes.value = state.currentMinValue;
            state.currentMinValue = minutes.value;
            minutes.value = Math.abs(minutes.value);
        };
        
    });
    });

    //HANDLING MINUS VALUES ON INPUT
    inputs.forEach(input => {input.addEventListener('input', event => {
       event.target.value = Math.abs(event.target.value);

        if(event.target.value > 59){
            state.currentSecValue = 59;
            event.target.value = Math.abs(state.currentSecValue);
            state.currentMinValue = 59;
        };
    });

    });







    //starting App

startBtn.addEventListener('click',event=> {
    event.preventDefault();
    counter();
   
    

});

resetBtn.addEventListener('click',event=> {
    event.preventDefault();
    minutes.value = 0;
    seconds.value = 0;
    state.currentMinValue = 0;
    state.currentSecValue = 0;
    state.resetbtnclicked = true;
});





