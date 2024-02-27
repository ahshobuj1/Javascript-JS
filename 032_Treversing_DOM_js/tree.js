//! Downwards  ->  (querySelector) and (children) 

let studentList = document.querySelector("#student-list");
studentList.querySelector(".student-A").innerHTML = "goodbye";

let studentC = studentList.querySelector(".student-C")
studentC.innerHTML = "very good , once more";

//* children 

let studentB = studentList.children[1];
studentB.innerHTML = "changed by children";


//! Upwards 

let studentUp = document.querySelector("li");
let parent = studentUp.parentElement;


//! sideways 
//* next sibling

let student3 = studentB.nextElementSibling;
student3.innerHTML = "ata hocce sibling";


let student4 = student3.nextElementSibling;
student4.innerHTML = " sibling next use ";

//* previous sibling 

let student1 = studentB.previousElementSibling;
student1.innerHTML = " This is previous sibling ";
