//?! Mouse Event -> //?Except element - <html>, <head>, <meta>, <title>, <br>, <style>, <script>, <iframe>, <param>, <base>, <bdo>
//* 1. onclick
//* 2. ondblclick
//* 3. onmousedown
//* 4. onmouseup
//* 5. onmouseenter
//* 6. onmouseleave
//* 7. onmousemove
//* 8. onmouseover


let div = document.querySelector("div");

div.addEventListener("click" , function(e){
    //*alert("Hello dear , how are you ?")
    //*console.log(e.target);
    //*console.log(e.target.id);
    //*console.log(e.target.className);
    //*console.log(e.target.innerHTML);
    //*console.log(e.target.innerText);

});



let button = div.querySelectorAll("button[type=submit]");

Array.from(button).map((btn) =>{

    btn.addEventListener('click' , function (e) {
        console.log(e.target.innerText);
    });

});






/* const btn = div.querySelectorAll("button[type=submit]");Array.from(btn).map((btt) => {
    btt.addEventListener('click', function (e){
        console.log(e.target.innerHTML);
    })
}) */








/* 
div.addEventListener('dblclick' , function(){
    console.log("double click occurred ");
})


div.addEventListener('mousedown' , function(){
    console.log("mousedown click occurred ");
})


div.addEventListener('mouseup' , function(){
    console.log("mouseup click occurred ");
})


div.addEventListener('mouseenter' , function(){
    console.log("mouseenter click occurred ");
})


div.addEventListener('mouseleave' , function(){
    console.log("mouseleave click occurred ");
})


div.addEventListener('mousemove' , function(){
    console.log("mousemove click occurred ");
})


div.addEventListener('mouseover' , function(){
    console.log("mouseover click occurred ");
})

 */