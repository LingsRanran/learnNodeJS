const fs = require('fs');

let fileReadStream = fs.createReadStream('data.json');

let count = 0;

/* fileReadStream.once('data' , (chunk) => {
    console.log(chunk.toString())
}) */

fileReadStream.on('data' , (chunk) => {
    console.log(`${++count} 接收到： ${chunk.length}`)
})

fileReadStream.on('end' , () => {
    console.log('-----结束------');
})

fileReadStream.on('error' , (error) => {
    console.log(error);
})