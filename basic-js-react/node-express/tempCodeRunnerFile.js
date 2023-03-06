const readstream1 = createReadStream('./content/big.txt', { highWaterMark : 90000});

readstream1.on('data', (result)=> {
    console.log(result);
})