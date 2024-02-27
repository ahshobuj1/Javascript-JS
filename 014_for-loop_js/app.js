//!for loop - loop control statement.
//* -> for (starting ; condition ; update)(x+=1 or x=x+1 or x++)


for (let x =  1; x <= 5; x+=1) {

document.write("Bangladesh <br>");
}


//* print 1 to 50

for (let num = 1; num <= 50; num = num + 1) {

document.write(" " + num);
}



//* print 50 to 1

for (let num1 = 50; num1 >= 1; num1 = num1 - 1) {

document.write(" " + num1);
}



//*Print 1 to 100 all even number

for (let y = 2; y <= 100; y = y + 2) {
document.write(" " + y);
}



document.write("<br>");
//*sum of 50 number ; like : 1+2+3+4+5....+50=?

let sum = 0;

for (let z = 1; z <= 50; z++) {

sum = sum + z;
}

document.write("sum of 50 number = " + sum)




document.write("<br>");
//*sum number ; from user input

let m = parseFloat(prompt("Enter first number :"));
let n = parseFloat(prompt("Enter last number :"));
let user = 0;

for (let h = m ; h <= n ; h+=1) {

user = user + h;
}

document.write("sum number = " + user)



//* akta proggram onk bar calanu jay loop er sahajje.


for (let d=1 ; d<=5 ; d=d+1){

    let number1 = parseInt(prompt("Enter First Number here :"));
    let number2 = parseInt(prompt("Enter Secend Number here :"));
    
    let Result = number1 + number2;
    console.log("Result = " + Result );

}

