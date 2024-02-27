//! Array - is a objects - Collection of variables 

let sum , sum1, sum2, sum3, sum4 ;
sum = "ahshobuj";
sum1 = "sharmin";
sum2 = "moriom";
sum4 = "shovo";



let names = new Array (5);       //* i can take unli,ited variables here
names[0] = " ah " ;
names[1] = " shobuj " ;
names[2] = " Arrays " ;
names[3] = " shultana " ;
names[4] = " bangla " ; 

document.write(names[1]);
document.write(names[0]);
document.write(names[4]);
document.write(names[2]);
document.write(names[3]);



let num = ["<br> number1 ", " number2 "," number3 "," number4 "," number5 "];
document.write(num);

document.write(num[0]);
document.write(num[3]);
document.write(num[4]);
document.write(num[2]);

document.write(num.length)



//* Array libriry - push (to add ) , pop(to remove) 

let ah = ["<br> number1 ", " number2 "];
document.write(ah)

ah.push(" ahshobuj ");               //*push add last item
ah.push(" shobuj ");
document.write(ah);


ah.pop();                           //*pop remove last item
document.write(ah);



//* Array Concat

let display1 = ["<br> Bangladesh " , " nepal "];

let display2 = [" pakistan " , " srilanka "];

let display = display1.concat(display2);
document.write(display);

