
let count = 0;


document.querySelector("#msg").addEventListener("keypress" , function (event){

    count++
    let text = event.key;
    document.querySelector("P").innerHTML = "You have pressed : " + count;

});