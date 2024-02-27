//!1. Arithmetic Oparators :+, -, *, /, %, **, --, ++ .
//* +(addition), -(Subtraction), *(Multiplication), /(Division), %(Modulus), **(Exponentiation), ++(Increment), --(Decrement) .




//!2. Assignment Oparators :+=, -+, *=, /=, %=, **= 
//* Example :
//* ->  x+=y => x = x + y
//* ->  x*=n => x = x * n

let x = 4;
x = x+=9 //x = x+9 ->4+9=13
document.write(x);


//! 3. Relational oparators : >, <, >=, <=, ==, ===, !=, !==

let a, b, c, num; 
a = 40;
b = 20;
c = 10;
num = a>b && b>=c && c<=a && c!=a && a!==b;
document.write(num);



//! 4. logical oparators : && (and), || (or), ! (not)

//*    num = a>b || b>c || a< ;   it's true









document.getElementById('demo').innerHTML = ('There are 8 types of oparators in javaScript.<br><br><strong>1. Arithmetic Oparators :</strong> +(addition),-(Subtraction),*(Multiplication),/(Division),%(Modulus),**(Exponentiation),++(Increment),--(Decrement)<br><br><strong>2. Assignment Oparators :</strong> +=, -+, *=, /=, %=, **= <br> Example :<br> x+=y => <strong>x = x + y</strong>  <br> x*=n => <strong>x = x * n</strong>');




