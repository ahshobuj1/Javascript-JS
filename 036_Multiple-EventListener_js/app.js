
let headingText = document.querySelector("h1");

let button1 = document.querySelector(".my-class1");
button1.addEventListener("click" , function(){

    headingText.innerHTML = " Now You have clicked button : 1 ";

});


let button2 = document.querySelector(".my-class2");
button2.addEventListener("click" , function (){

    headingText.innerHTML = "I Know , You have clicked button : 2";

});


let button3 = document.querySelector(".my-class3");
button3.addEventListener("click" , function(){

    headingText.innerHTML = "Finally you have clicked button : 3 ";

})