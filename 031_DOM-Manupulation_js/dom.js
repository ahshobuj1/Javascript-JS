let link = document.getElementsByTagName("a")[0];
link.innerHTML = " Google.com ";

//* add CSS

link.style.textDecoration = "none";
link.style.color = "black";
link.style.fontSize = " 50px";


//* change href

link.href = "https://google.com" ;


//* add new tag inside div (id = my_div)


let myDiv = document.getElementById("my_div");

let create = document.createElement("h2");
let text = document.createTextNode("Goobbye");

create.appendChild(text);                   //*add text
myDiv.appendChild(create);                 //*add div id




//* remove tag

let remove = document.getElementsByTagName("h1")[1];
myDiv.removeChild(remove);


//* add tag in first position 

let create2 = document.createElement("h3");
let text2 = document.createTextNode(" Hello Neighbor ")

let before = document.getElementsByTagName("h1")[0];

create2.appendChild(text2);
myDiv.insertBefore(create2,before);


//* add class 

myDiv.classList;                             //*class lisr chack

myDiv.classList.add("my-class2");           //*new class add
myDiv.classList.add("my-class3");           //*new class add
myDiv.classList.add("my-class4");           //*new class add

myDiv.classList.remove("my-class3");        //*class remove
myDiv.classList.remove("my-class");        //*class remove
