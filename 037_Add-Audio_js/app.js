
//! Advance way 
//* add once more function 


for (let x = 0; x < 3 ; x++) {

    document.querySelectorAll(".class1")[x].addEventListener("click" , 
    function(){
    
    let Textaudio = this.innerHTML;
    audioPlay(Textaudio) ;
    playAnimation(Textaudio);
    
    });

}

//* add keypress

document.addEventListener( "keypress" , function(event){

    Textaudio = event.key;

    playAnimation(Textaudio);
    audioPlay(Textaudio);
});

//* audio function
function audioPlay (Textaudio) {
    
    switch (Textaudio) {
    
        case  "A" :
        let audio = new Audio("./sounds/sunshine-bliss-181126.mp3");
        audio.play();
        break ; 
    
        case "B" :
        let audio1 = new Audio("./sounds/better-day-186374.mp3");
        audio1.play();
        break ;
    
        case "C" :
        let audio2 = new Audio("./sounds/realize-your-dreams-187607.mp3");
        audio2.play();
        break ;
    
    }

}

//* animation function 

function playAnimation (Textaudio) {

    let palyani = document.querySelector("." + Textaudio);
    palyani.classList.add("animation");

    setTimeout(function(){
    
        palyani.classList.remove("animation");
    
    }, 1000);

}


















//! Only audio proggram 
/*
for (let x = 0; x < 3 ; x++) {

    document.querySelectorAll(".class1")[x].addEventListener("click" , 
    function(){
    
    let Textaudio = this.innerHTML;    
    
    
        switch (Textaudio) {
        
            case  "A" :
            let audio = new Audio("./sounds/sunshine-bliss-181126.mp3");    
            audio.play();
            break ; 
        
            case "B" :
            let audio1 = new Audio("./sounds/better-day-186374.mp3");    
            audio1.play();
            break ;
        
            case "C" :
            let audio2 = new Audio("./sounds/realize-your-dreams-187607.mp3");    
            audio2.play();
            break ;
        
        }    
    
    });    

}    
 */

