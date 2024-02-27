//* query selector looks like CSS selector

//!get tag names

document.querySelector("a").innerHTML = "changed by tag name : a";


//! select a tag as a child,(inside ul li )

document.querySelector("ul li a").innerHTML = "changed by as a child ";


//!id select

document.querySelector("#mydiv").innerHTML = " changed by id ";


//! class select

let header = document.querySelector(".myheading");
header.innerHTML = "changed by class ";


//! all selector

document.querySelectorAll("h2")[1].innerHTML = "changed by all ";