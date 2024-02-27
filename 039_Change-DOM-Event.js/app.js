//* DOM Events
//* 1. Event Objects 
       //* Event type - change, submit, load, unload, open, play,       canplay, pause, playing, progress, ended, resize, scroll, toggle etc.  

//! Change 
//* input -> text, number, password, email, color, radio, checkbox, search, time, date, date time, week, month, url, tel, file 


//* <select>
//* <textarea>



let text = document.querySelector("input[name=name]");

text.addEventListener("change" , changeFunction);

function changeFunction(e) {
    console.log(e.target.value);
}




//! password 
let text1 = document.querySelector("input[type=password]");

text1.addEventListener("change" , changeFunction);

function changeFunction(e) {
    console.log(e.target.value);
}




// !checkbox

let checkbox = document.querySelectorAll("input[name=program]");


Array.from(checkbox).map((checkbox) => {
    checkbox.addEventListener("change" , handleProgram );
});


function handleProgram (e) {
    
    if (e.target.checked) {
        console.log(e.target.value);
    }
};



// ! select

let department = document.querySelector("#selectOption");

department.addEventListener("change" , departmentHandle );

function departmentHandle (e) {
    console.log(e.target.value);
};




/*  
? deficality level - Advance
document.querySelector("#selectOption").addEventListener("change" , function (e){

    console.log(e.target.value);

});
*/