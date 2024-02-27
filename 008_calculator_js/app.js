/* let num00 = prompt('Enter first number :' );
let num01 = prompt('Enter secend number :');

num00= parseInt(num00);
num01 = parseInt(num01);

result = num00 + num01;
document.write('Result = ' + result); */



let num1 = prompt('First number :');
let num2 = prompt('Secend number :');

num1 = parseInt(num1);
num2 = parseInt(num2);

let sum1 = num1 + num2;
let sum2 = num1 - num2;
let sum3 = num1 * num2;
let sum4 = num1 / num2;
let sum5 = num1 % num2;


sum1 = num1 + num2;
document.write(num1 + '+' + num2 + '=' + sum1 + '<br>');
sum1 = num1 - num2;
document.write(num1 + '-' + num2 + '=' + sum2 + '<br>');
sum1 = num1 * num2;
document.write(num1 + '*' + num2 + '=' + sum3 + '<br>');
sum1 = num1 / num2;
document.write(num1 + '/' + num2 + '=' + sum4 + '<br>');
sum1 = num1 % num2;
document.write(num1 + '%' + num2 + '=' + sum5 + '<br>');