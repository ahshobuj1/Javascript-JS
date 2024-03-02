//* for of -> array
//* for in -> object

const info = ["shobuj" , "ah" ,"poddo"]

for (let user of info){
    console.log(user);
}



//* object

const studentId = {
    id : 1611258575,
    name : "a h ",
    gpa : 4.33
}

for (let x in studentId){

    console.log(`${x} : ${studentId[x]}`);   //* al
    //console.log(x);   //name
    //console.log(studentId[x]);    //value
}