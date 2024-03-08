//* Calling API Fetch

//* fetch()  has replaced XMLHttpRequest
//* fetch() -> global method for making HTTP Request
//* 2 ways to call -> then , async-await
//* fetch() easy to use to compare XMLHttpRequest
//* fetch() returns a promise
//* returned promise can only handle network error
//* doesn't support all older browser

//* Getting resource

fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((response) => response.json())
    .then((res) => console.log(res));

//* post method

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',

    body: JSON.stringify({
        title: ' data',
        body: 'some data',
        userId: 1,
    }),

    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
    .then((res) => res.json())
    .then((res) => console.log(res));

//* updating a resource

fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT',

    body: JSON.stringify({
        id: 1,
        title: ' data type',
        body: 'some data added',
        userId: 1,
    }),

    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
    .then((res) => res.json())
    .then((res) => console.log(res));

//* patching resource

fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PATCH',

    body: JSON.stringify({
        title: ' data type changed here',
    }),

    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
    .then((res) => res.json())
    .then((res) => console.log(res));

//* deleting resource

fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'DELETE',
})
    .then((res) => res.json())
    .then((res) => console.log(res));
