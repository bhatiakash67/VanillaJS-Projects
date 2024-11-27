export function memoizingPromise() {

    document.getElementById('mainContent').innerHTML = `
    <div class="promiseWrapper">
        <div class="topContainer">
            <h2>Memoize Promises</h2>
            <p class="memoTextHeaders">Update the id to initiate API call, check the network tab in browser console to see the API calls being
                fetched.</p> </br>
            <div class="memoTextHeaders">ID - <span id="idCount"></span></div>
            <div class="memoTextHeaders">ID Data - <span id="idDataDisplay"></span></div> </br>
            <div id="memoBtnsContainer">
            <button class="memoBtns" id="plusFetchId">Increment ID</button>
            <button class='memoBtns' id="minusFetchId">Decrement ID</button>
        </div>
            </div>
        <div class="callCart">
            <h3>Network Calls:</h3>
            <ol id="fetchedItemList"></ol>
        </div>
    </div>
    `
    const idDisplay = document.getElementById('idCount')
    const idDataDisplay = document.getElementById('idDataDisplay')
    let id = 1
    let lastAction = 'increment'
    const fetchCache = {}
    const fetchedItemSet = new Set()

    async function fetchItems(url) {
        if (fetchCache[url]) {
            console.log('serving from cache:', fetchCache[url]);
            idDataDisplay.innerHTML = JSON.stringify(fetchCache[url])
            return
        }
        idDataDisplay.textContent = 'Loading...'
        try {
            const response = await fetch(url)
            if (!response.ok) throw new Error('Fetching data went wrong because: ')
            const result = await response.json()
            console.log('Fetched content:', result);
            fetchCache[url] = result
            idDataDisplay.innerHTML = JSON.stringify(result)
        } catch (error) {
            console.log('Error:', error);
            idDataDisplay.textContent = 'Error loading data. Please try again.'
        }
    }

    function addToNetworkCallList(url) {
        if (!fetchedItemSet.has(url)) {
            fetchedItemSet.add(url)
            const listItem = document.createElement('li')
            listItem.innerText = `${url}`
            document.getElementById('fetchedItemList').appendChild(listItem)
            console.log('added to network call list:', url);
        }
    }

    document.getElementById('plusFetchId').addEventListener('click', () => {
        let url = `https://jsonplaceholder.typicode.com/todos/${id}`
        fetchItems(url)
        addToNetworkCallList(url)
        idDisplay.textContent = id
        if (id < 200) id++
        lastAction = 'increment'
    })

    document.getElementById('minusFetchId').addEventListener('click', () => {
        if (id > 1) {
            id--
            const url = `https://jsonplaceholder.typicode.com/todos/${id}`
            fetchItems(url)
            addToNetworkCallList(url)
            idDisplay.textContent = id
            lastAction = 'decrement'
        } else {
            console.log('Id cannot be less than 1');
        }
    })
}