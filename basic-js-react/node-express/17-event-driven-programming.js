//emit is mean spit out, discharge, give off

const EventEmitter = require('events');

const customEmitter = new EventEmitter();

//methods on events object
//on() - listen for an event
//emit() - emit an event

//first param of on() is event's name
//second is callback function that will execute when the event emitted.
customEmitter.on('response',()=>{
    console.log(`data received`)
});

customEmitter.emit('response');

//what if we have 2 diff events with same event name...
customEmitter.on('response1',()=>{
    console.log(`data pppppppp`)
});
customEmitter.on('response1',()=>{
    console.log(`data qqqqqqqq`)
});
customEmitter.emit('response1');

//what if event emit run uncreated event
customEmitter.on('response2',()=>{
    console.log(`data tttttttt`)
});
customEmitter.emit('response2');
customEmitter.on('response2',()=>{
    console.log(`data ffffffff`)
});
//it wont be run

//parse some value to event emit...
customEmitter.on('response3',(user,id)=>{
    console.log(`data received ${user} #${id}`)
});
customEmitter.emit('response3', 'John', 112);

//u can use async and await for EventEmitter like this
const myEmitter = new EventEmitter()

const getDogs = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(['Woof', 'Woof', 'Woof'])
    }, 500)
  })
}

myEmitter.on('event', async () => {
  const dogs = await getDogs()
  console.log(dogs)
})

myEmitter.emit('event')