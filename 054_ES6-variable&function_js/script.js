//* ES6 function

const toCelsius = (f) => (5/9) * (f-32);
document.write(toCelsius(50));



const myFunction = (y,z) => y-z;
let a = myFunction(7, 3);
document.write(a);




//* variableDeclaration

let x = "It's outside of loop";

for (let x=1; x<=10; x++){

    console.log(x);
};
console.log(x);



//! var 
var y = "it's y" ;

if(true){
    var y = 10;
    console.log(y);
};
console.log(y);


//! concat

let num = 10;
let num1 = 23;
console.log(`The (+) is ${num+num1}`);
console.log(`The  (-) ${num-num1}`);
console.log(`The (*) is ${num*num1}`);
console.log(`The (/) is ${num/num1}`);
console.log(`The (%) is ${num%num1}`);

//*
let name = "A H Shobuj";
let nameMassage = `I am ${name}, Now I am learning javascript` ;

console.log(nameMassage);



//! function _es5

function addDetails(x,y){
    console.log("the sum is " + (x+y));
}
addDetails(21,10);

//! ES6 function

const addDetail = (m,n) =>console.log(`the sum is ${m+n}`); //*single line code.
addDetail(30,parseInt(prompt(`enter`)));


//* multiline function
const addDetail1 = (o,p) =>{

    console.log(`The sum is ${o+p}.`);

}

let s = parseFloat(prompt(`Enter a number first`));
let d = parseInt(prompt(`Enter second number`));

addDetail1(s,d);