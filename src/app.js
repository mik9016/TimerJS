import style from "./css/index.scss";

const minutes = document.getElementById('min');
const seconds =document.getElementById('sec');
const btn = document.querySelector('button');
const inputs = document.querySelectorAll('input');


// minutes.defaultValue = 1;
// seconds.defaultValue = 3;

// let currentSecValue = seconds.value;
// let updatedSecValue;
// let currentMinValue = minutes.value;
// let updatedMinValue;

// function minUp(){
//     minutes.addEventListener('change', e =>{
//         updatedMinValue = e.target.value;
//         currentMinValue = updatedMinValue;
//        console.log(currentMinValue);
//        secUpdate();
//        minUpdate(e);
//     });

// }

// function secUpdate() {

//     seconds.addEventListener('change', e =>{
   
//     if(e.target.value === seconds.getAttribute('max')){
        
        
//         updatedMinValue = parseInt(currentMinValue)+1;
//         minutes.setAttribute('value', parseInt(currentMinValue)+1);
//         currentMinValue = updatedMinValue;
//         e.target.value = 0;   
//     } else if(e.target.value === seconds.getAttribute('min')){
        
//         console.log(currentMinValue + " seconds listener")
//         updatedMinValue = parseInt(currentMinValue)-1;
//         minutes.setAttribute('value', parseInt(currentMinValue)-1);
//         currentMinValue = updatedMinValue;
//         e.target.value = 59; 
//     }
//      console.log(currentMinValue + ' inside secUpdate')
// });

// };

// function minUpdate(e){
//         if(e.target.value === seconds.getAttribute('min')){
//             console.log(currentMinValue + " inside minUpdate")
//             updatedMinValue = parseInt(currentMinValue)-1;
//             minutes.setAttribute('value', parseInt(currentMinValue)-1);
//             currentMinValue = updatedMinValue;
//             e.target.value = 59;   
//         }
//         // updatedMinValue = e.target.value;
//         // currentMinValue = updatedMinValue;
       
        
       
// }

// function counter(){
        
//     if( seconds.value>0){
       
//         currentSecValue = seconds.value;
//         updatedSecValue = currentSecValue -1;
//         seconds.disabled = true;

//         currentSecValue = updatedSecValue;
//         seconds.value = currentSecValue;
        
        



//        setTimeout(counter,1000)
//     }
//     else {
//         alert('The End!')
//         seconds.disabled = false;
//     }
// };

// minUp();


// btn.addEventListener('click',event=> {
//     event.preventDefault();
//     counter();

// });


let state = {
    currentMinValue: '',
    currentSecValue: '',
    updatedMinValue: '',
    updatedSecValue: ''
}

state.currentMinValue = 0;
state.currentSecValue = 0;
minutes.value = 0;
seconds.value = 0;

inputs.forEach(input => {input.addEventListener('change', e => {
    console.log(e.target.value)

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







