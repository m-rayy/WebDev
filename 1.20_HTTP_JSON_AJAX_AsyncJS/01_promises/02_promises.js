// Example 1:
const promise = new Promise((resolve, reject) => {
    if (true) {
        resolve('Stuff worked!')
    } else {
        reject('Error, it broke!')
    }
})

// Test:
promise.then(result => console.log(result));

// Chaining:
promise
.then(result => result + '!')
.then(result2 => {
    console.log(result2);
})
.then(result3 => {
    throw Error
    console.log(result3);
})
.catch(() => console.log('Error!'))
// The error below not caught
.then(result4 => {
    throw Error
    console.log(result4);
})


// Example 2:
const promise2 = new Promise ((resolve, reject) => {
    setTimeout(resolve, 100, 'Msg 100');
})

const promise3 = new Promise ((resolve, reject) => {
    setTimeout(resolve, 1000, 'Msg 1000');
})

const promise4 = new Promise ((resolve, reject) => {
    setTimeout(resolve, 3000, 'Msg 3000');
})

// Try in browser console:
Promise.all([promise2, promise3, promise4])
    .then(values => {
        console.log(values);
    })


// Example 3:
const urls = [
    // 'https://ERROR.typicode.com/users',
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

// Try in browser console:
Promise.all(urls.map(url => {
    return fetch(url).then(resp => resp.json())
})).then(results => {
    console.log('users', results[0]);
    console.log('posts', results[1]);
    console.log('albums', results[2]);
}).catch(() => console.log('Error!'))
