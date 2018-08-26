/*
 * @Author: Ranran
 * @Date: 2018-08-26 23:02:44
 * @LastEditors: Ranran
 * @LastEditTime: 2018-08-26 23:02:44
 * @Description: 
 * @Email: ranran0036@163.com
 * @GitHub: github.com/LingsRanran
 */
const http = require('http');
const url = require('url');

http.createServer((req , res) => {
    res.writeHead(200 , {
        'Content-Type' : 'text/html; charset=utf-8'
    })

    if(req.url !== '/favicon.ico'){
        let pathName = url.parse(req.url).pathname.replace(/\//,'');

        console.log(pathName);
    }

    res.end();
}).listen(8000);

console.log('Server running at http://localhost:8000')