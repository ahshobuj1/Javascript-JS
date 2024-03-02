//* Best Practice 
//* use CamelCase for naming 
//* variable declaration on top and initialize
//* avoid unnecessary variables 
//* switch , case , default 
//* object and array with const
//* == vs ====
//* access DOM less (use child, nextElementSibling, previousElementSibling, etc...).


//* function
function calculateCartPrice(val1,val3,val4,...num){
    return num;
} 
console.log(calculateCartPrice(200,300,400,5000,7000));


//*object
/* const user = {

    userName : "shobuj" ,
    prices    : 999 

} */

function handleObject(anyObject){

    console.log(`the userName is ${anyObject.userName} .and price is ${anyObject.price}`);
}

handleObject({
    userName : "A H Shobuj",
    price   : 599
});



//*arrays
const myNewStore = [300, 400, 5000, 900]
function returnArraysValue(getArray){
    return getArray[2]
    console.log();
};
//*console.log(returnArraysValue(myNewStore));
console.log(returnArraysValue([400,654,291,346]));




/* 
//! 
let head0 = document.getElementsByTagName("h1")[0];
head0.innerHTML = "pagol";//tag name 


let head4 = document.getElementsByClassName("heading4")[0];
head4.innerHTML = " hobei";//!class name 

let head2 = document.getElementsByClassName("heading1class")[1];
head2.innerHTML = "abr hobei";

document.getElementsByClassName("heading2class")[0].innerHTML = "this is header two tag";

document.getElementById("heading1").innerHTML = "this is heading one ,changed by id ";


 */





/* 
//!Date objects
console.log(date);

let year =date.getFullYear();
console.log(year);

let month = date.getMonth();
console.log(month);

let day = date.getDate();
console.log(day);

let daybyday = date.getDay();
console.log(daybyday); */










/* //!   Objects 
function Student (names,age,cgpa,lang){
    this.names = names;
    this.age = age;
    this.cgpa = cgpa;
    this.lang= lang;

    this.display = function () {
        console.log(this.names);
        console.log(this.age);
        console.log(this.cgpa);
        console.log(this.lang);
    }

}


const student1 = new Student(' shobuj ','20','4.33',['Bangla','english','hindi']);
const student2 = new Student(' sharmin ','20','4.33',['Bangla','english','hindi']);
const student3 = new Student(' labu ','20','4.33',['Bangla','english','hindi']);
const student4 = new Student(' moriom ','20','4.33',['Bangla','english','hindi']);

student1.display();
student2.display();
student3.display();
student4.display(); */