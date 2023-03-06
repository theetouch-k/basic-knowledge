const os = require('os') //os is a buit-in module
//require is a built-in function to load module

//info about current user
const user = os.userInfo()
console.log(user)

//system uptime
console.log(`System Uptime is ${os.uptime()} seconds`)

//a dict contains current user'infos
const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOS);