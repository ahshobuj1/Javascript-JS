//* fetch data

const fetchData = async (url) => {
    try {
        const output = await axios.get(url);
        return output.data;
    } catch (error) {
        throw Error(`data is not fetched`);
    }
};

const parent = document.querySelector(`.parent`);

const loadData = async () => {
    const data = await fetchData(`https://jsonplaceholder.typicode.com/posts`);

    data.map((value) => {
        let child = document.createElement(`div`);
        child.classList.add(`child`);
        child.innerHTML = `
                <h2>${data.title}</h2>
                <p>${data.body}</p>
        `;

        parent.appendChild(child);
    });
};
loadData();
