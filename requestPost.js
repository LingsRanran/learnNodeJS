const http = require('http');
const querystring = require('querystring');

let postData = querystring.stringify({
    'question[title]' : null,
    'question[content]' : '<pre class="brush:html;toolbar:false" style="font-family: monospace, monospace; font-size: 14px; color: rgb(68, 68, 68); background-color: rgb(248, 250, 252);">怎么引入js外部样式</pre><p><br/></p>',
    'question[courseId]' : '405',
    'question[lessonId]' : '9493',
    '_csrf_token' : '3474aa0a0277445dfd988906c8f6c3c3bc601d25',
});

let options = {
    hostname : 'www.codingke.com',
    port : 80,
    method : 'POST',
    path : '/ajax/create/course/question',
    headers : {
        'Accept': 'application/json, text/javascript, */*; q=0.01',
        'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'zh-CN,zh;q=0.9',
        'Connection': 'keep-alive',
        'Content-Length': postData.length,
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Cookie': 'UM_distinctid=1653d3e8afd6f5-0784a96a92d0bc-2711639-1fa400-1653d3e8aff9d5; 53gid2=10559502440012; 53gid0=10559502440012; 53gid1=10559502440012; 53revisit=1534330835167; tgw_l7_route=ba4a4fa767ccc5ac6060ead23a114820; CNZZDATA1256018185=559258740-1534325704-null%7C1534331216; Hm_lvt_7d5fe787f1dd300413ad4b53656dc0b1=1534330834,1534332925; visitor_type=old; 53kf_72165667_from_host=www.codingke.com; 53kf_72165667_keyword=https%3A%2F%2Fwww.baidu.com%2Flink%3Furl%3DDCvHbvxy6AKLMZQwUmdMDKugWdXKED1L5VDYF-l4XKd6do19siFL7G1gFd238mDX%26wd%3D%26eqid%3Ddc2f41fc0006209e000000055b740ffa; 53kf_72165667_land_page=http%253A%252F%252Fwww.codingke.com%252F; kf_72165667_land_page_ok=1; 53uvid=1; onliner_zdfq72165667=0; PHPSESSID=o0fhk0tu2kjqnpr2nbrjeu0u32; Invite_code=337750; Hm_lpvt_7d5fe787f1dd300413ad4b53656dc0b1=1534333791',
        'Host': 'www.codingke.com',
        'Origin': 'http://www.codingke.com',
        'Referer': 'http://www.codingke.com/v/9493-lesson',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.84 Safari/537.36',
        'X-CSRF-Token': '3474aa0a0277445dfd988906c8f6c3c3bc601d25',
        'X-Requested-With': 'XMLHttpRequest'
    }
}

let request = http.request(options , (res) => {
     console.log('Status:' + res.statusCode);
     console.log('Header:' + JSON.stringify(res.headers));
     res.setEncoding('utf-8')
     res.on('data' , (chunk) => {
        console.log(chunk);
     })
     res.on('end' , () => {
         console.log('技术提交完毕');
     })
})

request.on('error' , (err) => {
    console.log(err);
})

request.write(postData);

request.end();