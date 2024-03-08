//* axios(config)
//* axios(url,{config})

const makeRequest = async (url) => {
    return await axios(url);
};

const getData = () => {
    makeRequest('https://jsonplaceholder.typicode.com/posts/12')
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
};
getData();

//* post data
const postData = () => {
    makeRequest({
        url: 'https://jsonplaceholder.typicode.com/posts',
        method: 'post',
        data: JSON.stringify({
            id: 12,
            title: 'This is title',
            body: 'bar has updated ',
            userId: 1,
        }),
    })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
};
postData();
