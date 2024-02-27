
document.querySelector("button").addEventListener("click", mybutton);

function mybutton() {
alert("Hello");
}


//! h1 CSS -> mouse -over/out
let eventListen = document.querySelector("h1");

eventListen.addEventListener("mouseover" , function(){

    eventListen.classList.add("my-class");

});


eventListen.addEventListener("mouseout" , function(){

    eventListen.classList.remove("my-class");

});
