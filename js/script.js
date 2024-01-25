const loadBtn = document.querySelector('#load-btn')
const postContainer = document.querySelector('#articles-container')
loadBtn.addEventListener('click', loadPosts)

async function loadPosts() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
        if (!response.ok) {
            throw new Error(`Erreur de chargement : ${response.status}`)
        }

        const data = await response.json()
        displayPosts(data)
    } catch {
        console.error('Erreur :', error.message)
    }
}

function displayPosts(data) {
    

    data.forEach((post) => {
        const postElement = document.createElement('div')
        postElement.classList.add('post')
        
        const title = document.createElement('h2')
        title.innerHTML = post['title']
        postElement.appendChild(title)

        const text = document.createElement('p')
        text.innerHTML = post['title']
        postElement.appendChild(text)

        postContainer.appendChild(postElement)
    })
}

