//create a simple HTTP server...

const http = require('http');
const  url = require('url');

http.createServer(function(req,res){
    res.writeHead(200,{
        'content-type':'text/html'
    });
    var q = url.parse(req.url,true).query;
    var txt = q.year + " " + q.month;
    //res.write("<b>hello.....</b>");
    //http://localhost:8080/?year=2017&month=July
    res.end(txt)
}).listen(8080);