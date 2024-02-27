
//! add function inside button

function buttonAlert1 () {
    alert("Assalamu alaikum ");
}



//! add texrt value inside button 

function bunttontext1 () {

    let mytext = document.querySelector("#textp");
    mytext.innerHTML = "You have clicked button one !";

}


function bunttontext2 () {

    let mytext = document.querySelector("#textp");
    mytext.innerHTML = " I know , You have clicked button two !";

}


//! add picture inside button

let myImg = document.querySelector("#myimages");
let myText = document.querySelector("#textimages");

function mypicture1 () {

    myImg.src = "./images/shobuj-modified.png";

    myText.innerHTML = "This is A H Shobuj . He is stuyding in Bangla College , Mirpur ";

}

function mypicture2 () {

    myImg.src = "./images/flower-modified.png";

    myText.innerHTML = " This is a flower. The flower gave me sharmin Shultana ";

}