//learn to use file System

const fs = require('fs');
const { connect } = require('http2');
var dirName = './temp'
var fileName = './temp/sample.txt';
var sampleContent = "this is a sample content";

//create a new directory;

if (!fs.existsSync(dirName)){
    fs.mkdirSync(dirName);
}

//create a new file in this directory and add content to that file...

fs.open(fileName,'w',function(err,file){
    if (err) throw err;
    console.log(file+" saved");
    fs.writeFile(fileName,sampleContent,'utf8',function(err){
        if (err) throw err;
        console.log("write successful");
    })
    fs.close(file,function(err){
        console.log("closed");
    });
});