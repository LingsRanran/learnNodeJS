const https = require('https');

let options = {
    hostname : 'api.douban.com',
    port : 443,
    method : 'GET',
    path : '/v2/movie/top250'
}

let responseData = '';

let request = https.request(options , (res) => {
    //console.log(res.statusCode);
    //console.log(res.headers);

    res.setEncoding('utf-8');
    res.on('data' , (chunk) => {
        responseData += chunk;

    })

    res.on('end' , () => {
        JSON.parse(responseData).subjects.map((item) => {
            console.log(item.title);
        })
    })
})

request.on('error' , (err) => {
    console.log(err);
})

request.end();