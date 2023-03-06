//create read delete

// const fsm = require('fs');
// //create file
// //last param is call-back
// fsm.writeFile('example.txt', "this is an example", (err)=> {
//     if (err) console.log(err);
//     else {
//         fsm.readFile('example.txt','utf8',(err, file)=> {
//             console.log('File successfully created');
//             if (err)
//                 console.log(err);
//             else
//                 console.log(file);
//         });
//     }
// });

// const fsm = require('fs');
// fsm.appendFile('example2.txt', ' Some data being appended', (err)=>{
//     if (err)
//         console.log(err);
//     else
//         console.log('Successsfully appended data to file');
// });

// //rename file
// const fsm = require('fs');
// fsm.rename('example.txt','example2.txt', (err)=>{
//     if(err)
//         console.log(err);
//     else
//         console.log('successfully rename the file');
// });

//delete file
// const fsm = require('fs');
// fsm.unlink('example2.txt', (err)=>{
//     if(err)
//         console.log(err);
//     else
//         console.log('successfully deleted the file');
// });

// //mkdir and rmdir
// const fsm = require('fs');
// fsm.mkdir('tutorial', (err)=>{
//     if (err)
//         console.log(err);
//     else {
//         console.log('created folder');
//         fsm.rmdir('tutorial', (err)=> {
//             if (err)
//                 console.log(err);
//             else 
//                 console.log('successfully deleted te folder');
//         });
//     }
// });

// //write file
// const fsm = require('fs');
// fsm.mkdir('tutorial', (err)=>{
//     if (err)
//         console.log(err);
//     else {
//         console.log('created folder');
//         fsm.writeFile('./tutorial/example.txt', '123', (err)=> {
//             if (err)
//                 console.log(err);
//             else 
//                 console.log('successfully created the file');
//         });
//     }
// });

// //delete folder but can't delete folder that containing file(s)
// const fsm = require('fs');
// fsm.rmdir('tutorial',(err)=>{
//     if (err)
//         console.log(err);
//     else
//         console.log('deleted folder');
// });

// const fsm = require('fs');
// fsm.unlink('./tutorial/example.txt', (err)=>{
//     if (err) console.log(err);
//     else console.log('successfully removed the file');
// });

// //read dir (give you filenames within folder)
// const fsm = require('fs');
// fsm.readdir('example', (err,files)=>{
//     if (err) console.log(err);
//     else console.log(files);
// });

// loop the delete files within folder
const fsm = require('fs');
fsm.readdir('example', (err,files)=>{
    if (err) console.log(err);
    else {
        for (let file of files) {
            fsm.unlink('./example/'+file, (err)=>{
                if (err) console.log(err);
                else console.log(`successfully deleted file ${file}`);
            });
        }
    }
});