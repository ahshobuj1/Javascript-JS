//!Count total characters

let text = 'sharmin'
text = text.length;
document.write(text);


let text1 = ' shultana '
document.write( ' <br>character number :' + text1.length + '<br>');



//!User input 

let textUser = prompt('Enter your name here : ');
textUser = textUser.toUpperCase();
document.write(textUser);


let textUser1 = prompt('Enter your here : ');
document.write(textUser.toLowerCase());



//!Text character / Index number

let character = 'SHARMIN';
character = character.charAt(4);
document.write(character)



//!Concatinate 

let first = '<br> Bangladesh is a ';
let last = 'beutifull country <br>'

document.write(first.concat(last));



//!Slice

let text5 = 'sharminshultana';
document.write(text5.slice(3,7));
