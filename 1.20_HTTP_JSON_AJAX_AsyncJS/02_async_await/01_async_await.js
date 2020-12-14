// callback pyramid of doom...
movePlayer(100, 'Left')
    .then(() => movePlayer(400, 'Left'))
    .then(() => movePlayer(10, 'Right'))
    .then(() => movePlayer(330, 'Left'))

// Replaced by:
async function playerStart() {
    const firstMove = await movePlayer(100, 'Left'); // pause
    await movePlayer(400, 'Left'); // pause
    await movePlayer(10, 'Right'); // pause
    await movePlayer(330, 'Left'); // pause
}


// Real example 1:
fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp => resp.json())
    .then(console.log)

// Syntactic sugar:
async function fetchUsers() {
    const resp = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await resp.json()
    console.log(data)
}


// Real example 2:
const urls = [
    // 'https://ERROR.typicode.com/users',
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

Promise.all(urls.map(url => {
    return fetch(url).then(resp => resp.json())
})).then(results => {
    console.log('users', results[0]);
    console.log('posts', results[1]);
    console.log('albums', results[2]);
}).catch(() => console.log('Error!'))

// Syntactic sugar:
const getData = async function() {
    try {
        const [ users, posts, albums ] = await Promise.all(urls.map(url =>
            fetch(url).then(resp => resp.json())
        ))
        console.log('users', users)
        console.log('posts', posts)
        console.log('albums', albums)
    } catch {
        console.log('Error!')
    }
}
