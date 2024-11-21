export function searchBar() {
    document.getElementById('mainContent').innerHTML = `
    <div id="tableWrapper">
        <input type="text" name="" id="searchBar" placeholder="Search for a name">
        <table id="tabtab">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Job</th>
                    <th>E-Mail</th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
    </div>
    `
    const table = document.getElementById('tabtab').querySelector('tbody')
    // const btn = document.getElementById('searchBtn')
    const searchBar = document.getElementById('searchBar')
    let result;

    async function fetchData() {
        try {
            let response = await fetch('https://jsonplaceholder.typicode.com/users')
            if (!response.ok) {
                throw new Error('This is the rockstar error')
            }
            result = await response.json()

            result.forEach(user => {
                const row = document.createElement('tr')
                row.dataset.name = user.name.toLowerCase()
                row.innerHTML = `
                <td> ${user.name}</td>
                <td> ${user.address.city} </td>
                <td> ${user.company.name} </td>
                <td> ${user.email}</td>
                `
                table.appendChild(row);
            })
        } catch (error) {
            console.error("Something went wrong:", error);
        }
    }
    fetchData()
    searchBar.addEventListener("input", () => {
        const searchValue = searchBar.value.toLowerCase()
        const rows = table.querySelectorAll('tr')
        rows.forEach(row => {
            if (row.dataset.name.includes(searchValue)) {
                row.style.display = ''
            } else {
                row.style.display = 'none'
            }
        })
    })

}