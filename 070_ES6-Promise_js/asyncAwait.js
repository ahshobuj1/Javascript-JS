//* Async await

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

async function usingAwait() {
    try {
        const value1 = await firstOne();
        console.log(value1);

        const value2 = await secondOne();
        console.log(value2);

        const value3 = await thirdOne();
        console.log(value3);

        const value4 = await fourthOne();
        console.log(value4);

        const value5 = await fifthOne();
        console.log(value5);
    } catch (error) {
        console.log(error);
    }
}
usingAwait();

// * try,catch() -> for handling error
