//*Switch Keywords  -> switch , case , break , default .

let num = prompt("Enter a number here : ");

switch (num) {
    case "0":
        document.write("Zero");
        break;

    case "1":
        document.write("One");
        break;

    case "2":
        document.write("Two");
        break;

    case "3":
        document.write("Three");
        break;

    case "4":
        document.write("Four");
        break;

    case "5":
        document.write("Five");
        break;

    case "6":
        document.write("Six");
        break;

    case "7":
        document.write("Seven");
        break;

    case "8":
        document.write("Eight");
        break;

    case "9":
        document.write("Nine");
        break;

    default:
        document.write("It's not a digit");

    }



//!Vowel or Consonant
let num1 = prompt("Enter an digit : ");
num1 = num1.toLowerCase();

switch(num1){
case "a" :
case "e" :
case "i" :
case "o" :
case "u" :
    document.write(" It's a Vowel");
    break;

default :
document.write(" It's a Consonet ");


/* case "a":
    document.write(" It's a Vowel");
    break;
case "e" :
    document.write(" It's a Vowel");
    break;
case  "i":
    document.write(" It's a Vowel");
    break;
case  "o" :
    document.write(" It's a Vowel");
    break;
case "u":
    document.write(" It's a Vowel");
    break;

default :
    document.write(" It's a Consonat"); */
}