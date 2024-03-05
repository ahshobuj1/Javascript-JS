//* find() -> ata condition depend kore first value ta return kore .

const number = [13, 45, 67, 13, 35, 60, 23, 4, 5, 67, 7, 86];

let firstEvenNumber = number.find((x) => x % 2 == 0);

console.log(firstEvenNumber);

//* findIndex()-> finIndex return index number of first value .

const student = [
    {
        id: 9101,
        department: "Economics",
    },
    {
        id: 9102,
        department: "Accounting",
    },
    {
        id: 9103,
        department: "CSE",
    },
];

let value = student.findIndex((y) => y.id < 9102);
console.log(value);

let id = student.find((y) => y.id < 9102);
console.log(id);
