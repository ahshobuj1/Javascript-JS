const childDataElements = [
    {
        Title: 'This is title 2',
        body: 'this is body 2',
    },
    {
        Title: 'This is title 3',
        body: 'this is body 3',
    },
    {
        Title: 'This is title 4',
        body: 'this is body 4',
    },
    {
        Title: 'This is title 5',
        body: 'this is body 5',
    },
    {
        Title: 'This is title 6',
        body: 'this is body 6',
    },
    {
        Title: 'This is title 7',
        body: 'this is body 7',
    },
    {
        Title: 'This is title 8',
        body: 'this is body 8',
    },
    {
        Title: 'This is title 9',
        body: 'this is body 9',
    },
    {
        Title: 'This is title 10',
        body: 'this is body 10',
    },
    {
        Title: 'This is title 11',
        body: 'this is body 11',
    },
    {
        Title: 'This is title 12',
        body: 'this is body 12',
    },
    {
        Title: 'This is title 13',
        body: 'this is body 13',
    },
    {
        Title: 'This is title 14',
        body: 'this is body 14',
    },
    {
        Title: 'This is title 15',
        body: 'this is body 15',
    },
];

const parentElement = document.querySelector('.parent');

const loadData = () => {
    childDataElements.map((value) => {
        const childElement = document.createElement('div');
        childElement.classList.add('child');
        childElement.innerHTML = `
            <h2>${value.Title}</h2>
            <p>${value.body}</p>
            `;

        parentElement.appendChild(childElement);
    });
};
loadData();
