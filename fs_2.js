const fs = require('fs');

fs.mkdir('logs' , (err) => {
    if(err){
        console.log(err);
    }else{
        console.log('成功创建目录')
    }
})