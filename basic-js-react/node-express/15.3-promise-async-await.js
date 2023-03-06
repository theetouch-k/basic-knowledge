function makeRequest(location) {
  return new Promise((resolve, reject) => {
    console.log(`Making Requst to ${location}`)
    if (location === 'Google') {
      resolve ('Google says hi');
    } else {
      reject ('We can only talk to Google');
    }
  })
}

function processRequest(response) {
  return new Promise((resolve, reject) => {
    console.log('Processing response');
    resolve(`Extra Information + ${response}`);
  });
}

makeRequest('Google').then((response)=> {
  console.log('Response Received');
  return processRequest(response);
}).then((processedResponse) => {
  console.log(processedResponse)
}).catch(err=> {
  console.log(err);
})
//these resolve processing Promises isn't not that bad
//but we can make it more easier without then and then and all nasty stuff inside them

//first we have rto tell JS that the following fucntion is synchronous function so 
//the JS will able to handle the 'await' 
async function doWork() {
  try {
    // await makeRequest('Google');
    //what upper line means? : the code(main thread or in another word : stack)
    // should wait until makeRequest is finished then it will continue execute next things.
    const response1 = await makeRequest('Google');
    //once JS hit this await statement it'll just leave ths function, do other work inside 
    //of ther program and then as soon as this makRequest finished executing it will
    //comback to there and return result to 'response1' variable
    console.log('Response Received');
    const processedResponse = await processRequest(response1);
    console.log(processedResponse);
  }
  catch (err) {
    console.log(err);
  }
}
doWork();