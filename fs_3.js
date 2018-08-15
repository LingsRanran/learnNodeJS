const fs = require('fs');

fs.writeFile('logs/hello.log' , 'hello ~ \n' , (err) => {
    if(err){
        console.log(err);
    } else {
        console.log('文件写入成功');
    }
})

fs.appendFile('logs/hello.log' , 'hhh ~ \n' , (err) => {
    if(err){
        console.log(err);
    } else {
        console.log('文件写入成功');
    }
})