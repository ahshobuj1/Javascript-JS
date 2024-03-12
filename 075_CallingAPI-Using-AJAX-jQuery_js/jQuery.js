//* Add jQuery with cdn
//* ajx - asynchronous javascript ans xml

const makeRequest = async (url, method, data) => {
    try {
        let input = await $.ajax({
            url: url,
            method: method,
            data: data,
        });

        return input;
    } catch (err) {
        console.log(err);
    }
};

const getData = () => {
    makeRequest('https://jsonplaceholder.typicode.com/posts/2', 'GET').then(
        (res) => console.log(res)
    );
};
getData();

const createData = () => {
    makeRequest('https://jsonplaceholder.typicode.com/posts', 'POST', {
        title: 'POST title',
        body: 'Creating Post',
        userId: 1,
    }).then((res) => console.log(res));
};
createData();
