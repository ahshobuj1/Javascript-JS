let timeButton = document.querySelector(".btn");
let message = document.querySelector(".message");

timeButton.addEventListener('click' , runClock);

function runClock(){

    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let clock = hours + ":" + minutes + ":" + seconds ;

    //minutes = formatClock(minutes);
    //seconds = formatClock(seconds);

    message.textContent = clock ;

    setInterval(runClock , 1000);
};


/* function  formatClock(value){

    if (value<10){
        value = "0" + value ;
    }
    return value ;
} */

