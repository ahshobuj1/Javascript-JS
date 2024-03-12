//* localStorage is permanent
//* localStorage must be -> string
//* window object
//? setup -> setItem(key, value)

localStorage.setItem('user0', 'none');
localStorage.setItem('user', 'a h Shobuj');
localStorage.setItem('user1', 'sharmin');
localStorage.setItem('mail', 'ahshobuj11@gmail.com');

//* getItem(key)

let user = localStorage.getItem('user');
console.log(user);
let user1 = localStorage.getItem('user1');
console.log(user1);

//* removeItem

localStorage.removeItem('user0');

//* store array as a string

const countries = ['Bangladesh', 'spain', 'Netherland'];
localStorage.setItem('countries', JSON.stringify(countries));

let getArray = JSON.parse(localStorage.getItem('countries'));
console.log(getArray);

//! localStorage.clear();
//all clean
//
//

//* sessionStorage
//* localStorage vs sessionStorage
//* 10mb vs 5mb
//* permanent vs session(tab)

const obj = {
    id: 9101,
    name: 'Stranger',
};

sessionStorage.setItem('obj', JSON.stringify(obj));

let getObj = JSON.parse(sessionStorage.getItem('obj'));
console.log(getObj);
