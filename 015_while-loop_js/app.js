//!   while loop 
//*   (starting;) {while (condition)} {update}  .



let x = 1;
while ( x <= 10 ){

document.write( x  + " ")

x = x + 1 ;

}




//* somosti nirnoy 

let m = parseFloat(prompt('First number :'));
let n = parseFloat(prompt("secend number :"));
let sum = 0;

let y = m ;
while( y <= n ){

sum = sum + y;

y = y + 1;

}

document.write(" Sum = " + sum);
