const fs = require('fs');

fs.rename('logs/hello.log' , 'logs/greeting.log' , (err) => {
    if(err){
        console.log(err);
    } else {
        console.log('重命名成功');
    }
})