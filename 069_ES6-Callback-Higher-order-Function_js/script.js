//* Callback, higher-order function

const square = (x) => console.log(`Square of ${x}: ${x * x}`);
// const y = square;
// y(6);

const higherOrderFunction = (number, callback) => {
    callback(number);
};
higherOrderFunction(3, square);

//! There is two type function here , "higherOrderFunction" is Higher Order Function and "square" function is callback function .
//
//
//
//
//* main program

const taskOne = (callback) => {
    console.log(`Task1`);
    callback();
};

const taskTwo = (callback) => {
    setTimeout(() => {
        console.log(`Task2 Data Loading`);
        callback();
    }, 1000);
};

const taskThree = (callback) => {
    console.log(`Task3`);
    callback();
};
const taskFour = (callback) => {
    console.log(`Task4`);
    callback();
};
const taskFive = () => console.log(`Task5`);

taskOne(() => taskTwo(() => taskThree(() => taskFour(() => taskFive()))));

//! with details
/* 
taskOne(function f1() {
    taskTwo(function f2() {
        taskThree(function f3() {
            taskFour(function f4() {
                taskFive();
            });
        });
    });
});
 */

//
//
//
//
//
//
//* button

console.log(`Before Listener`);

document.querySelector(`button`).addEventListener(`click`, () => {
    console.log(`hello, i have clicked`);
});

console.log(`after Listener`);

/* 
const taskOne = (callback) => {
    console.log(`Task1`);
    console.log(callback);
};

const taskTwo = (callback) => {
    setTimeout(() => {
        console.log(`Task2 Data Loading`);
        console.log(callback);
    }, 1000);
};

const taskThree = () => console.log(`Task3`);
const taskFour = () => console.log(`Task4`);
const taskFive = () => console.log(`Task5`);

taskOne(taskTwo(taskThree()));
 */
