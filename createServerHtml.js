const http = require('http');
const fs   = require('fs');

fs.readFile('./temp/Sample.html',function(err,data) {
    if (err) throw err;
    http.createServer(function(req,res) {
        res.writeHead(200,{
            'content-type':'text/html'
        });
        res.write(data);
        res.end
    }).listen(8000);
})