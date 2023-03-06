function watchTutorialCallback(callback, errorCallback) {
    let userLeft = false
    let userWatchingCatMeme = false

    if (userLeft) {
        errorCallback({
        name: 'User Left', 
        message: ':('
        })
    } else if (userWatchingCatMeme) {
        errorCallback({
        name: 'User Watching Cat Meme',
        message: 'WebDevSimplified < Cat' 
        })
    } else {
        callback('Thumbs up and Subscribe')
    }
}
  
function watchTutorialPromise() {
    let userLeft = false
    let userWatchingCatMeme = false
    return new Promise((resolve, reject) => {
        if (userLeft) {
        reject({
            name: 'User Left', 
            message: ':('
        })
        } else if (userWatchingCatMeme) {
        reject({
            name: 'User Watching Cat Meme',
            message: 'WebDevSimplified < Cat' 
        })
        } else {
        resolve('Thumbs up and Subscribe')
        }
    })
}

watchTutorialCallback(message => {
    console.log(message)
}, error => {
    console.log(error.name + ' ' + error.message)
})

watchTutorialPromise().then(message => {
    console.log(message)
}).catch(error => {
    console.log(error.name + ' ' + error.message)
})

//Promise is go to solve callback inside callback inside callback inside...
//which is called 'callback hell', Promise is list a nested callbback so when that
//incident came we can just use 'then' to chain them which is much more cleaner.

const recordVideoOne = new Promise((resolve, reject) => {
    resolve('Video 1 Recorded')
})

const recordVideoTwo = new Promise((resolve, reject) => {
    resolve('Video 2 Recorded')
})

const recordVideoThree = new Promise((resolve, reject) => {
    resolve('Video 3 Recorded')
})

Promise.all([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then(messages => {
    console.log(messages)
})

Promise.race([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then(message => {
    console.log(message)
})