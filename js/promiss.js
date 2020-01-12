const url = 'https://jsonplaceholder.typicode.com/todos';
async function todos() {
    const response = await fetch(url); //oy fetch tv teanh pi server
    const data = await response.json(); //use awair rhot dl vea teanh mk dl ban vea confert jea json
    const result = document.querySelector('#card');

    await data.forEach(item => {
        const {id, title, completed} = item;
        result.innerHTML += `
            <tr>
                <td>${id}</td>
                <td>${title}</td>
                <td>${completed}</td>
            </tr>
        `;
    })
}
todos();