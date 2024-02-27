let form = document.querySelector("form");

let name = form.querySelector("div #name");
let email = form.querySelector("div #email");
let password = form.querySelector("div #password");

form.addEventListener("submit", formHandle);

function formHandle (e) {
    e.preventDefault();        

    console.log(name.value);
    console.log(email.value);
    console.log(password.value);

}



//! for back-end 
/* 
function formHandle (e) {
    e.preventDefault();        

    const userinfo = {
        name : name.value,
        email : email.value,
        password : password.value,
    };

    console.log(userinfo);

    name = "";
    email = "";
    password = "";

} */


//? ata na thakle value 1 secend a benis hoye jay ........
//*     e.preventDefault();