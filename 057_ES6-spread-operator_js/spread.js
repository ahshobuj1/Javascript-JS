//* spread operator 

let number1 = [1,2,3];
let number2 = [4,5,6];
let number = [...number1,9,8,...number2]; //* spread concat
//let numbers = number1.concat(number2);//* normal concat
console.log(number);



//* objects spread

let ob1 = {
    name : `a h shobuj`,
    age : 22
};

let ob2 = {
    nationality : `Bangladesh`,
    occupation : `Student`
};

let ob = {...ob1 , ...ob2};

console.log(ob);





/* function sumNumber1(x,y,z){
    console.log(x+y+z);
}

sumNumber1(1,2,3); */

//* use spread
function sumNumber(x,y,z){
    return x+y+z ;
}

let newArrays = [1,2,3]
console.log(sumNumber(...newArrays));

//* console.log(sumNumber(newArrays[0],newArrays[1],newArrays[2]));