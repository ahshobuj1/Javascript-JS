//* with forEach

const digit1 = [10, 14, 42, 53];
const digit5 = [];

digit1.forEach((y) => digit5.push(y + 9));

digit5.forEach((x) => console.log(x));

// * return value within same array

const num = [0, 9, 7, 6, 4];

num.forEach((a, index, arr) => {
    arr[index] = a + 5;
    console.log(a);
});

/* 
const digit = [20, 30, 40, 50];
let m = digit.forEach(function (x, index, arr) {
    arr[index] = x + 5;
});
console.log(digit);

const digit2 = [0, 1, 2, 5];
digit2.forEach((m) => console.log(m));
 */
/* 
const numbers = [12, 34, 6, 7, 90];
const num = numbers.forEach((x) => x + 4);

//* with of / in

const digit1 = [5, 6, 8, 10];

for (let x of digit1) {
    console.log(x);
}

//* normal

const digit2 = [10, 12, 15, 20];

for (let x = 0; x < digit2.length; x++) {
    console.log(digit2[x]);
}
 */
