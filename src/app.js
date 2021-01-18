import style from "./css/index.scss"

const minutes = document.getElementById('min');
let seconds =document.getElementById('sec');
const btn = document.querySelector('button');

minutes.defaultValue = 0;
seconds.defaultValue = 0;

let currentValue;
let updatedValue;

function counter(){
    
    if( seconds.value>0){
        currentValue = sec.value;
        updatedValue = currentValue -1;
        seconds.disabled = true;

       currentValue = updatedValue;
       seconds.value = currentValue;
        setTimeout(counter,1000)
    }
    else {
        alert('The End!')
    }



// setTimeout(counter(),1000);
}

    minutes.value = 0;
    seconds.value = 0;



btn.addEventListener('click',(event)=> {
    event.preventDefault();
    counter();

});
