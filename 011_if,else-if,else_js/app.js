//!Control Statement 2 types :
//* 1 . Conditional Control Statement -> if , else if , else
//* 2 . Loop control Statement -> for , while , do while 


//! Even or Odd number 

let num = 3267161;

if(num%2==0)
document.write("Even");

else                         // if(num%2!=0)
document.write("Odd");



//!positive , nagative or zero

let number = -2;

if(number>0)
document.write("positive");

else if (number<0)
document.write('<br>' + "Nagative" + '<br>');

else                // if(number==0)
document.write("Zero");



//!Task ->Marks Latter Grading.
let marks = parseFloat(prompt("Enter Your Marks Here :"));

if (marks>=80 && marks<=100)
document.write("A+");

else if (marks>=70 && marks<=79)
document.write("A");

else if (marks>=60 && marks<=69)
document.write("A-");

else if(marks>=50 && marks<=59)
document.write("B");

else if (marks>=40 && marks<=49)
document.write("C");

else if (marks>=33 && marks<=40)
document.write("D");

else if (marks>101)
document.write("Please Enter Correct Number!");

else
document.write("Failed");

