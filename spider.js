const http = require('http');
const https = require('https');
const cheerio = require('cheerio');

const url = 'https://www.lagou.com/';

function filterMenu(html){
    let $ = cheerio.load(html);
    let menu = $('.menu_main');
    let menuData = [];

    menu.each(function(index,val){
        let menuTitle = $(val).find('h2').text();
        let menuLists = $(val).find('a');
        let menuList = [];

        menuLists.each(function(index , val){
            menuList.push($(val).text())
        })

        menuData.push({
            menuTitle : menuTitle,
            menuList : menuList
        })
    })
    return menuData;
}

function printMenu(menu){
    menu.forEach(function(val){
        console.log(val.menuTitle + '\n');
        val.menuList.forEach(function(val){
            console.log(val);
        })
    });
}

https.get(url , function(res){
    let html = '';
    res.on('data', function(data){
        html += data;
    })

    res.on('end' , function(){
        let result = filterMenu(html);

        printMenu(result);
        
    })

    res.on('error' , function(err){
        console.log(err);
    })
})