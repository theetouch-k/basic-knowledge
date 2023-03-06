//what is event loop?

//JS is a single thread programming but.. why when it run callback func
//it dont have to wait until the func execute. it go to next line instead?

//Problem of single thread programming is when we directly write request instuctions
//it will have 'blocking' probem.
//ex.

//var foo = $.getSync('//foo.com');
//var bar = $.getSync('//bar.com');

//console.log(foo);
//console.log(bar);

//[Run]

//if we click Run button to run those instruction on web browser we can't do anything
//until those request and log is completed.

//So how do we handle this?

//we use 'asynchronous callback function' to help
//so what a asynchronous callback look like...
//ex.

console.log('Hi');

setTimeout(function() {
    console.log('There')}
, 5000)

//or we can write callback in this form
//setTimeout(() => {
//    console.log('There')
//}, 5000)

console.log('Hoo');

//output

//Hi
//Hoo
//There

//confuse right? why JS which is a single thread can do such a thing like this?
//because JS is single thread BUT our IDE and web browsers isn't.

//It can do by using 3 elements
//- Stack or Callstack (like stack in RISC-V that push input instruction
// and pop instruction when finished)
//- WebAPIs : take async callback func from stack
//- Task Queue : 

//when u run the code, u push ur main func to the stack
//- first line in main(), console.log('Hi')
//- second the callback function setTimeout, which after run it it will be pop from stack
//to (or in another word: off-loaded to) the WebAPIs. Then timer in the WebAPIs start to countdown the time (5s)
//since no working task in the stack so next, 
//- the third task in main() which is console.log('Hoo')
//now we have run everything in the main() so we can free stack now.
//BUT remember we have something left at WebAPIs, the callback func.
//when the timer at WebAPIs said 'hey it's time bro, 5s passed', the callback func
//which is cb() will be sent to Task Queue
//when everything will be sent to stack when the stack is empty one by one.
//so now console.log('There') run.
//ps. the one that handle between stack and task queue is EventLoop

//ex.2

console.log('Hi');

setTimeout(function() {
    console.log('There')}
, 0)

console.log('Hoo');

//from the explanation, even the setTimeout is 0ms u still have to wait until stack
//is empty so the cb() can be run.

//then how about a clickable button
//ex.

//$.on('button','click', function onCLick() {
//   console.log('Click');
//});

//when u run the code this task will be store in WebAPIs
//when user click the button WebAPIs will send an onClick() to task queue
//if users click the button 100 times? as u guessed, WebAPIs wil send onClick() to
//task queue 100 times.

//the be more understand, guess how these code run
//ex.

setTimeout(function timeoout() {
    console.log('hi');
}, 2000);

setTimeout(function timeoout() {
    console.log('hi');
}, 2000);

setTimeout(function timeoout() {
    console.log('hi');
}, 2000);

setTimeout(function timeoout() {
    console.log('hi');
}, 2000);

//u can see that the timeout() function sent to WebAPIs and each of them waited for
//2000ms then sent to the queue but the functions not run yet.
//because it have to wait for the last task of the stack.
//the setTimeout isn't a garuntee time to execution but a garuntee of 
//minimum time to execution.

//example of sync vs async
[1,2,3,4].forEach(function (i) {
    console.log('processing sync');
});

//see that the first one is a callback function but it isn't an async calback fucntion

function asyncForEach(array, cb) {
    array.forEach(function() {
        setTimeout(cb,0);
    });
};

asyncForEach([1,2,3,4], function(i) {
    console.log('processing async');
});

//conclusion about the Event loop: dont push anything too slow like loop or request to run 
//on the stack because it will block tasks from task queue and make your app so slow.

//try it urself -> http://latentflip.com/loupe/