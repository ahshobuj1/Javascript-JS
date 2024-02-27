//! ternary oparator short versionn of condition = if, else

let number = prompt("enter a letter : ");
number = number.toLowerCase();

number = number=="a" || number=="e" ||number =="i" || number =="o" || number =="u"?  "Vowel" : "Consonet ";

document.write(number);





//* positive Negative 

let num = parseFloat(prompt("enter number :"));

num > 0? document.write(" positive ") : num < 0 ?  document.write("Negative") : document.write(" Zero ");
