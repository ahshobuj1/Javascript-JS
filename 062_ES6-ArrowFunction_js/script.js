const details = [
    {
        id: 9101,
        name: "shobuj",
        gpa: 4.33,
    },
    {
        id: 9102,
        name: "moriom",
        gpa: 2.33,
    },
    {
        id: 9103,
        name: "shovo",
        gpa: 3.45,
    },
    {
        id: 9104,
        name: "a h",
        gpa: 4.33,
    },
];

const studentName = () => details.filter((x) => x.gpa > 4).map((y) => y.name);
console.log(studentName());

//*Traditional function / Normal way

function studentId() {
    return details
        .filter(function (n) {
            return n.gpa > 3;
        })
        .map(function (m) {
            return m.id;
        });
}
console.log(studentId());
