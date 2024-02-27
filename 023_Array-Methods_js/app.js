//*Array methods
//* shift(), unshift(),splice(pos,noe,ele1,ele2..)
//* sort (), reverse ()



const names = [" ah ", " shobuj ", ' sharmin <br>'];
document.write(names);


//* shift remove first element - like opposite of pop 

names.shift();
document.write(names);


//* unshift add first element - like opposite of push 

names.unshift("A H");
document.write(names);


//! splice  
//*   Add splice 
const Name = [" ah ", " shobuj ", ' none ', ' chicken ' ,' sharmin <br>'];
document.write(Name);

Name.splice (3,0,' joker ', ' floyed ' , ' html ', ' css ');
document.write(Name);


//*remove splice
Name.splice(3,2);
document.write(Name);


//! slice 

const Number = Name.slice(3);
document.write(Number);

document.write(Name);


//! sort element 

const fruits = [" Bannaa ", " Painapel ", ' Mango ', ' Strawberry ',' Sharmin' , 'Apple <br>'];

fruits.sort();
document.write(fruits);

const fruits1 = fruits.toSorted();
document.write(fruits1);


//* reverse

/* 
fruits.reverse();
console.log(fruits);

const fruits2 = fruits.toReversed();
conmsole.log(fruits2);
*/


//!sort by number

const phone = [ 3, 54, 35, 4, 12, 3, 64, 67, 7, 5, 13, 9, 24, 5, 33, 52, 67, 74, 43, 1, 92, 26, 0, 35, 6, 8,100, 54, 23, 84, 25 ,'<br>'];

phone.sort(function(a,b){return a-b});
document.write(phone);


phone.sort(function(a,b){return b-a});
document.write(phone);




