//* program with promise (it's an Asynchronous program)

const firstOne = () => {
    const promise1 = new Promise((resolve, reject) => {
        resolve(`Task one done 1`);
    });
    return promise1;
};
const secondOne = () => {
    return new Promise((resolve, reject) => {
        resolve(`Task two done 2`);
    });
};
const thirdOne = () => {
    return new Promise((resolve, reject) => {
        resolve(`Task three done 3`);
    });
};
const fourthOne = () => {
    return new Promise((resolve, reject) => {
        reject(`Task four error 4`);
    });
};
const fifthOne = () => {
    return new Promise((resolve, reject) => {
        resolve(`Task five done 5`);
    });
};

firstOne()
    .then((print) => console.log(print))
    .then(secondOne)
    .then((print) => console.log(print))
    .then(thirdOne)
    .then((value) => console.log(value))
    .then(fourthOne)
    .then((value) => console.log(value))
    .then(fifthOne)
    .then((value) => console.log(value))
    .catch((error) => console.log(error));

console.log(`Tata tata`);

//* program wit callBack
/* 
const firstOne = (callback) => {
    console.log(`Task one done 1`);
    callback();
};

const secondOne = (callback) => {
    console.log(`Task two done 2`);
    callback();
};
const thirdOne = (callback) => {
    console.log(`Task three done 3`);
    callback();
};
const fourthOne = (callback) => {
    console.log(`Task four done 4`);
    callback();
};
const fifthOne = (callback) => {
    console.log(`Task five done 5`);
};

firstOne(() => secondOne(() => thirdOne(() => fourthOne(() => fifthOne()))));
 */
