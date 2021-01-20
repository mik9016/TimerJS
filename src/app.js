import style from "./css/index.scss";

const minutes = document.getElementById('min');
const seconds =document.getElementById('sec');
const btn = document.querySelector('button');
const inputs = document.querySelectorAll('input');



let state = {
    currentMinValue: '',
    currentSecValue: ''
}

state.currentMinValue = 0;
state.currentSecValue = 0;
minutes.value = 0;
seconds.value = 0;

inputs.forEach(input => {input.addEventListener('change', e => {
    

    if(e.target.id === 'sec'){
        state.currentSecValue = +e.target.value;
        if (state.currentSecValue === 60) {
            state.currentMinValue = +state.currentMinValue +1;
            console.log(state.currentMinValue + ' minvalue')
            minutes.value = state.currentMinValue;
            seconds.value = 0;
        }else if(state.currentMinValue>0 && state.currentSecValue === 0){
            state.currentMinValue = +state.currentMinValue -1;
            minutes.value = state.currentMinValue;
            seconds.value = 59;
        }
    }else if(e.target.id === 'min'){
        state.currentMinValue = +e.target.value;
    }
    
})});



function counter(){
        
    if( state.currentSecValue>0){
  
        state.currentSecValue = +state.currentSecValue -1;
        seconds.value = state.currentSecValue;
        seconds.disabled = true;
        minutes.disabled = true;
        if(state.currentMinValue>0 && state.currentSecValue === 0){
            
            state.currentMinValue = +state.currentMinValue - 1;
            minutes.value = state.currentMinValue;
            seconds.value = state.currentSecValue = 59;
            
        }
        
       setTimeout(counter,1000)
    }
    else {
        alert('The End!')
        seconds.disabled = false;
        minutes.disabled = false;
    }
};


btn.addEventListener('click',event=> {
    event.preventDefault();
    counter();

});





