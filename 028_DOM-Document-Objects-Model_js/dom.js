//!get by id

document.getElementById("heading1").innerHTML = "changed by id 1";

//!get by class

document.getElementsByClassName("class1")[1].innerHTML = "changed by class : 2";

let head3 = document.getElementsByClassName("class1")[2];
head3.innerHTML = "changed by class : 3";


//!get by tag names 

let tagName = document.getElementsByTagName("h1")[3];
tagName.innerHTML = " changed by tag names : 4";

document.get