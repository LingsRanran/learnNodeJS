const fs = require('fs');

fs.readdirSync('logs').map((file) => {
    fs.unlink(`logs/${file}` , (err) => {
        if(err){
            console.log(err);
        } else {
            console.log(`成功删除了文件:${file}`);
        }
    })
})

fs.rmdir('logs' , (err) => {
    if(err){
        console.log(err);
    } else {
        console.log('删除文件夹成功');
    }
})