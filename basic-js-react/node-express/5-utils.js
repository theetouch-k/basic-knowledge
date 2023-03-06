//Everyfile in node is module

const sayHi = (name) => {
  console.log(`Hello ${name}`)
}

sayHi('Urn')

//console.log(modules);

module.exports = sayHi;