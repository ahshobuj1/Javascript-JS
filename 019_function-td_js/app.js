//! Function Create

function shobuj( ){

let num = 3;
num = num * num ;
document.write(" = " + num + "<br>");

}

shobuj();     //*call function
shobuj();





//* function with defrent value 

function names(sum) {

let result = sum * sum ;
document.write('Result = ' + result + '<br>');

}

names (2);
names (5);
names (8);
names (3);
names (10);


//* Call function  together 
/* (function names(sum) {

let result = sum * sum ;
document.write('Result = ' + result + '<br>')

}) (10); */


//!  Creating a Calculate system .

function calculate (digit) {

    let Result = digit + digit ;
        return Result;
}
Result = calculate (26);
document.write("Addition = " + Result + "<br>");




//*for minas

function calculate1 (sup,sub) {

    let Result1 = sup - sub ;
        return Result1;
}
document.write("Subtraction = " + calculate1 (23,10) + "<br>");




//*for multiplication

function calculate2 (intro,intro1) {

    let Result2 = intro * intro1 ;
        return Result2;
}
document.write("Multi = " + calculate2 (9,30) + "<br>");




//*for division

function calculate3 (div,div1) {

    let Result3 = div / div1 ;
        return Result3;
}
document.write("Division = " + calculate3 (120,10) + "<br>");




//*for Modulus

function calculate4 (mod,mod1){

    let Result4 = mod % mod1 ;
        return Result4 ;
}
document.write("Modulus = " + calculate4 (20,3));


