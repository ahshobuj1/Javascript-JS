//!Chack Vowel or 
let letter = prompt("Enter any Letter :");
letter = letter.toLowerCase();

if (letter=='a' || letter=='e' || letter=='i'|| letter=='o' || letter=='u')
document.write("This is a Vowel ");

else if(letter>=0)
document.write("Invalid");

else 
document.write("It's a Consonant");


//!Find Large number
let num1 = parseFloat(prompt("Enter first Number :"));
let num2 = parseFloat(prompt("Enter secend Number :"));
let num3 = parseFloat(prompt("Enter third Number :"));

if (num1>num2 && num1>num3)
    document.write("The large number is Num1 = " + num1);

else if (num2>num1 && num2>num3)
    document.write("The large Number is Num2 = " + num2);

else
    document.write("The large Number is Num3 = " + num3);


//!Digit sppelling
let digit = prompt("Enter a digit Here : ");

if (digit==0)
document.write("Zero");

else if (digit==1)
document.write("One");

else if (digit==2)
document.write("Two");

else if (digit==3)
document.write("Three");

else if (digit==4)
document.write("four");

else if (digit==5)
document.write("Foive");

else if (digit==6)
document.write("Six");

else if (digit==7)
document.write("Seven");

else if (digit==8)
document.write("Eight");

else if (digit==9)
document.write("Nine");

else
document.write("It's not a digit");
