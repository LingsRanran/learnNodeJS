const fs = require('fs');

fs.readFile('logs/hello.log' , 'utf-8' , (err , data) => {
    if(err){
        console.log(err);
    } else {
        console.log(`文件读取成功:${data}`);
    }
})

