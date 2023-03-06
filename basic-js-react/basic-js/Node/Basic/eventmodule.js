const EventEmitter = require ('events');

const eventEmitter = new EventEmitter();
//first param is listener that what
//second is a function that will run when listenser event occured
eventEmitter.on('Urn',()=> {
  console.log('Urn event started!');
});
eventEmitter.emit('tutorial');
eventEmitter.emit('Urn');
//with param
eventEmitter.on('sum',(num1,num2)=> {
    console.log(num1+num2);
});
eventEmitter.emit('sum',1,2);

class Person extends EventEmitter {
    constructor(name) {
        super();
        this._name = name;
    }
    get name() {
        return this._name;
    }
}

let human = new Person('Urn');
let human2 = new Person('EiEi');
human.on('name',()=> {
    console.log('My name is '+human.name)
});
human2.on('name',()=> {
    console.log('My name is '+human2.name)
});
human.emit('name');
human2.emit('name');