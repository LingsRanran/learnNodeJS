const fs = require('fs');

fs.stat('spider.js' , (err , stats) => {
    if(err){
        console.log(err);
    }else{
        console.log(stats);
        console.log(`文件：${stats.isFile()}`);
        console.log(`文件：${stats.isDirectory()}`);
    }
})