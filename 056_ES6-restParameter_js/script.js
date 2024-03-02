//* Rest Parameter 

let parameterRest = (m,n,...z) => {
    console.log(`${m} , ${n} and ${z}`);
}
parameterRest(20,10,34,23,56,78,23,45,66);












//* Default parameter

"use strict"

const massage = (x,y) => {
    console.log(`${x} and ${y}`);
};
massage(22,19);


//* Default
const Massage = (y ="this is from y") => {
    console.log(`${y}`);
};

let text = `This is default parameter`;
Massage();
Massage(text);