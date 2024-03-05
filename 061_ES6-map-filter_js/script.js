//* map

const number = [1, 3, 5, 7, 9, 10];

const newNumber = number.map((x) => x + 9);
for (let m of newNumber) {
    console.log(m);
}
//console.log(newNumber[1]);

//* filter

const number1 = [3, 15, 6, 8, 0, 13, 15, 36, 89];

const New = number1.filter((y) => y > 10);
for (let z of New) {
    console.log(z);
}

//* filter

const number2 = [1, 12, 34, 45, 12, 9, 34, 5, 17];
const newArray = number2.filter((x) => x > 10);
console.log(newArray);

for (let x of newArray) {
    console.log(x);
}
