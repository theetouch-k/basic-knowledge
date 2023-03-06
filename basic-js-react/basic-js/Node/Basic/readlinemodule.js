const readline = require('readline');
const rl = readline.createInterface({  input : process.stdin,
                            output : process.stdout});
//random 2 number 1-10
let num1 = Math.floor((Math.random()*10) + 1);
let num2 = Math.floor((Math.random()*10) + 1);
let answer = num1 + num2;

//readline interface has method question
rl.question(`What is ${ num1 } + ${ num2 }? \n`,
    //second param of question module is input
    (userInput)=>{
        if (userInput.trim() == answer) {
            rl.close();
        }
        else {
            //take string and ask user
            //why ask again? : because question module can ask user only once.
            rl.setPrompt('Incorrect response please try again\n');
            //call the prompt to use it
            rl.prompt();
            //add listener to readline interface
            rl.on('line', (userInput)=> {
                if (userInput.trim() == answer) {
                    rl.close();
                }
                else {
                    rl.setPrompt(`Your answer : ${userInput} is wrong, Try again...\n`);
                    rl.prompt();
                }
            });
        }
    }
);

//this is execute when the readline inteface closed
//why? : rl.close mean rl called close event
rl.on('close', ()=> {
    console.log('Correct la brooo!');
});