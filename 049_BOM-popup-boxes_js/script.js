//! JS BOM 
//* popup boxes - alert, confirm, prompt

alert("This is alert");
//console.log(window.alert);


//? confirm 

let h2 = document.querySelector("h2");
function del (){

    const confirmation = confirm("are you sure for deleting this file");

    if (confirmation) {
        h2.textContent= "Successfully you have deleted the file" ;
    }else{
        h2.innerText = "not deleted" ;
    }

};

del ();


//! prompt 

let text = document.querySelector("h1");

function message() {

    let name = prompt("Enter your Name");

    if ( name == null || name == '') {
        text.innerHTML = " unknown " ;
    }else{
        text.textContent = "Welcome " + name;
    }

}

message();