//* create promise
//* use a promise
//* Run multiple promise -all()
//* race()
//* Promise chaining

//* Create a Promise -> pending, resolve , reject

const myPromise = new Promise((resolve, reject) => {
    let x = 33;
    if (x >= 40) {
        resolve(`condition matched from promise 1 resolve`);
    } else {
        reject(`This is rejected, failed`);
    }
});

myPromise
    .then((response) => console.log(response))
    .catch((err) => console.log(err));

//* details call promise code

/* 
myPromise
    .then(function (res) {
        console.log(res);
    })
    .catch(function (err) {
        console.log(err);
    });
*/

//* promise 2

const promiseTwo = new Promise((resolve, reject) => {
    resolve(`Resolved completed from promise 2`);
});

promiseTwo.then((value) => console.log(value));

/*
promiseTwo.then(function (value) {
    console.log(value);
});
*/

//*! promise all() and Destructuring

const promise3 = new Promise((resolve, reject) => {
    resolve(`Resolved completed from promise 3`);
});

const promise4 = new Promise((resolve, reject) => {
    resolve(`Resolved completed from promise 4 :`);
});

Promise.all([promise3, promise4]).then(([res1, res2]) =>
    console.log(res2, res1)
);

//* setTimeout ---Promise.race()

const promise8 = new Promise((resolve, reject) => {
    setTimeout((x) => {
        resolve(`Resolved promise 8`);
    }, 3000);
});

const promise9 = new Promise((resolve, reject) => {
    setTimeout((y) => resolve(`Resolved  promise 9`), 2000);
});

Promise.race([promise8, promise9]).then((res) => console.log(res));
