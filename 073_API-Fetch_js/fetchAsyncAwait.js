//* fetch() data with Async Await

const apiRequest = async (url, config) => {
    const response = await fetch(url, config);

    if (!response.ok) {
        throw new Error(`There is Error here ${response}`);
    }
    return await response.json();
};

const getData = () => {
    apiRequest('https://jsonplaceholder.typicode.com/posts/2')
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
};
getData();

const sendData = () => {
    apiRequest('https://jsonplaceholder.typicode.com/posts/2', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo data',
            body: 'barma',
            userId: 1,
        }),

        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
};
sendData();

const updateData = () => {
    apiRequest('https://jsonplaceholder.typicode.com/posts/2', {
        method: 'PUT',
        body: JSON.stringify({
            title: 'foo data up',
            body: 'barma data updated',
            userId: 1,
        }),

        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
};
updateData();

const changeData = () => {
    apiRequest('https://jsonplaceholder.typicode.com/posts/2', {
        method: 'PATCH',
        body: JSON.stringify({
            title: 'foo data changed here',
        }),

        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
};
changeData();

const deleteData = () => {
    apiRequest('https://jsonplaceholder.typicode.com/posts/2', {
        method: 'DELETE',
    })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
};
deleteData();
