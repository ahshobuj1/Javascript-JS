//? BOM (Browser object model) 
//* window object
//* location object
console.log(window);
console.log(window.location);

//* href
console.log(location.href);

//* host
console.log(location.host);

//* hostname
console.log(location.hostname);

//* port
console.log(location.port);

//* pathname
console.log(location.pathname);

//* protocol
console.log(location.protocol);

//* origin 
console.log(location.origin);



let locationDiv = document.querySelector('#location_div');

let p1 = locationDiv.children[0];
p1.innerHTML = location.href ;

let p2 = p1.nextElementSibling ;
p2.textContent = location.protocol ;

let p3 = p2.nextElementSibling ;
p3.innerText = location.host ; 

let p4 = p3.nextElementSibling ;
p4.innerText = location.hostname ; 

let p5 = p4.nextElementSibling ;
p5.innerText = location.port ; 


//* Added linkedin

let visitButton = document.querySelector("#visit_button");

visitButton.addEventListener("click" , function(){

    location.assign("https://www.likedin.com/in/ahshobuj");

});