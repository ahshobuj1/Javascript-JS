//* Array destructure
//* swap variables
//* object destructure
//* nested object destructure
//* destructuring function parameter

//* Array destructure

const number = [1, 23, 4, 79, 5, 45, 32, 778, 32, 34, 2];

const [num1, num2, num3, num4, num5, ...numAll] = number;
console.log(num4);
console.log(numAll);

//* object destructure

let studentDetails = {
    id: 9101,
    fullName: "Sharmin Shultana",
    gpa: 4.92,
    language: {
        native: "Bangla",
        intermediate: "English",
    },
};

const { id, fullName, gpa, language } = studentDetails;
console.log(fullName);
console.log(language.native);

//* nested object destructure

const { native, intermediate } = language;
console.log(intermediate);

// console.log(studentDetails.id);
// console.log(studentDetails.fullName);
// console.log(studentDetails.gpa);

//* swap variables

let first = " A H ";
let last = " shobuj";

[first, last] = [last, first];
console.log(last);

//* destructuring function parameter

const studentInfo = (id, fullName) => {
    console.log(id);
};

const student = {
    id: 9001,
    fullName: "destructure",
};

studentInfo(student);
