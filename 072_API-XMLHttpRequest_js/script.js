//* Event -> onload(), onerror()
//* property -> response, responseText,responseType,responseURL, status, statusText
//* Function -> open(), send(), setRequestHeader()

//* another way

const makeRequest = (method, url, data) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);

    xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8');

    xhr.onload = () => {
        let data = JSON.parse(xhr.response);
        console.log(data);
    };

    xhr.onerror = () => {
        console.log(`There is a error here`);
    };

    xhr.send(JSON.stringify(data));
};

const getData = () => {
    makeRequest('GET', 'https://jsonplaceholder.typicode.com/posts');
};

const sendData = () => {
    makeRequest('POST', 'https://jsonplaceholder.typicode.com/posts', {
        title: 'foor',
        body: 'barma',
        userId: 1,
    });
};

const updateData = () => {
    makeRequest('PUT', 'https://jsonplaceholder.typicode.com/posts/1', {
        id: 1,
        title: 'fooma',
        body: 'barmaaaa',
        userId: 1,
    });
};

const updateSingleData = () => {
    makeRequest('PATCH', 'https://jsonplaceholder.typicode.com/posts/1', {
        title: 'Title is changed ',
    });
};

const deleteData = () => {
    makeRequest('DELETE', 'https://jsonplaceholder.typicode.com/posts/1');
};

getData();
sendData();
updateData();
updateSingleData();
deleteData();

//* with promise
/* 
const makeRequest = (method, url, data) => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);

        xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8');

        xhr.onload = () => {
            let data = JSON.parse(xhr.response);
            console.log(data);
        };

        xhr.onerror = () => {
            console.log(`There is a error here`);
        };

        xhr.send(JSON.stringify(data));
    });
};

const getData = () => {
    makeRequest('GET', 'https://jsonplaceholder.typicode.com/posts').then(
        (res) => {
            console.log(res);
        }
    );
};

getData(); 
*/

//* only program
/* 
const getData = () => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');

    xhr.onload = () => {
        let data = JSON.parse(xhr.response);
        console.log(data);
    };

    xhr.onerror = () => {
        console.log(`There is a error here`);
    };

    xhr.send();
};

getData(); 
*/
