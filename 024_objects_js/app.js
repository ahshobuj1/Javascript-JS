//* Objects can store data .
//* print value 
//*Add a Co0nstructor 
//*add a functionm inside constructor

let student = {
    nameS : 'a h shobuj',
    agE : 22,
    cgpA : 4.33 ,
    lanG : ['English', 'Bangla','Hindi']
}
console.log(student.nameS);
console.log(student.agE);
console.log(student.lanG);



//*multiple value store

function Student(Name,age,cgpa,lang) {

    this.Name = Name;
    this.age = age;
    this.cgpa = cgpa;
    this.lang =lang;


    //!Add a function inside a constructor

    this.display = function() {
        document.write(this.Name);
        document.write(this.age);
        document.write(this.cgpa);
        document.write(this.lang);
    }

}

const student1 = new Student(' (Shobuj ', 22 , 4.33, ["English",'Bangla', 'Hindi)']);
const student2 = new Student ('<br>(Sharmin ', 18 , 9.92 , ['Bangla','English)']);
const student3 = new Student (' (Moriom ', 18 , 9.92 , ['Bangla','English)']);
const student4 = new Student (' Shuvo ', 40 , 9.92 , ['Bangla','English']);
const student5 = new Student (' (Amena ', 38 , 9.92 , ['Bangla','English)']);
const student6 = new Student (' Dolul ', 18 , 9.92 , ['Bangla','Arabic']);
const student7 = new Student (' Labiba ', 18 , 9.92 , ['Bangla','English']);
const student8 = new Student (' Tamanna ', 18 , 9.92 , ['Bangla','English']);
const student9 = new Student (' Badsa ', 18 , 9.92 , ['Bangla','English']);
const student10 = new Student (' Ritu ', 18 , 9.92 , ['Bangla','English']);


document.write(student1.Name);
document.write(student2.Name);
document.write(student3.Name);
document.write(student4.Name);
document.write(student5.Name);
document.write(student6.Name);
document.write(student7.Name);


//* Print function inside the constructor

student2.display();
student1.display();
student3.display();
student5.display();