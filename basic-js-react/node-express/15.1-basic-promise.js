let p = new Promise((resolve, reject) => {
    let a = 1 + 1;
    if (a==2) {
        resolve('Success');
    }
    else {
        reject('Failed');
    }
})

//if you want to parse any variable in promise u can do like this...
function p_function(x,y) {
    return new Promise((resolve, reject) => {
        let a = x + y;
        if (a==2) {
            resolve('Success');
        }
        else {
            reject('Failed');
        }
    })
}
p.then((message) => {
    //param of then is a function that have 1 param which is message
    console.log(`This is in the then ${message}`);
}).catch((message) => {
    console.log(`This is in the catch ${message}`);
});

//here just a rewind of callback function
//what is callback function, callback function is a function that used by other function
//as parameter.

function test (message) {
    console.log(`This is in the then ${message}`);
}
p_function(1,1).then(test
).catch(function (message) {
    console.log(`This is in the then ${message}`);
});