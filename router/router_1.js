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