//! do while -loop control statement    .

let x = 1 ;
do {

document.write("bangladesh <br>")

x = x + 1;

} while ( x <= 10 )


//*somosto ber koro, jei sob songkha ke 3 ar 5 diye vag korle vagpol 0 hoy

let m = parseFloat(prompt("First number :"));
let n = parseFloat(prompt("secend number :"));

let y = m ;
do{
    if (y%3==0 && y%5==0)
    document.write(" sum =" + y);

y = y + 1;

} while ( y <= n )