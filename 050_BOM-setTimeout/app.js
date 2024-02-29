//* JS BOM
//* JS Timing events methods
//* setTimeOut(),
//* setInterval(),

setTimeout(()=>{   //? Anonymous Function

    console.log("Saved ");

}, 3000);



setTimeout(timeRelated , 4000) //! 4000 Millisecond.

function timeRelated() {

    console.log("you have saved successfully");

};



//! A Basic program with setTimeout() - setInterval().

let saveButton = document.querySelector(".btn");
let message = document.querySelector(".message");

saveButton.addEventListener("click" , button);

function button(){
    message.textContent = "You have saved successfully";

    setTimeout(timeControl , 3000);

    function timeControl() {
        message.textContent = "" ;
    }
};



//! setInterval() practice program 

let saveButton1 = document.querySelector(".btn1");
let message1 = document.querySelector(".message1");

saveButton1.addEventListener('click' , userCount);

function userCount() {

    let count = 0 ;
    setInterval(()=>{
        count++ ;
        message1.textContent = count ;
    }, 1000);

};