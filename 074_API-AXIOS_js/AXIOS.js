//*! Axios is a library
//* it helps to make request from browser(plain ja/Vue/React/Angular) node js

//* very easy to use
//* it support all modern browser
//* it returns promise
//* throws error brilliantly
//* no need to set header cause axios intelligent

//? axios.get/post(url,{config})
//* axios return response object -> data, config,status,statusText,header

//*
//* get data

axios
    .get('https://jsonplaceholder.typicode.com/posts/10')
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));

//* post data

axios
    .post('https://jsonplaceholder.typicode.com/posts', {
        body: JSON.stringify({
            id: 10,
            title: 'fooma',
            body: 'barma',
            userId: 1,
        }),
    })
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));

//* update

axios
    .put('https://jsonplaceholder.typicode.com/posts/10', {
        body: JSON.stringify({
            id: 10,
            title: 'foo has updated',
            body: 'bar updated',
            userId: 1,
        }),
    })
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));

//* change

axios
    .patch('https://jsonplaceholder.typicode.com/posts/10', {
        body: JSON.stringify({
            title: 'fooma has updated here ',
        }),
    })
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));

//* delete

axios
    .delete('https://jsonplaceholder.typicode.com/posts/10')
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
