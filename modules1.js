const readline = require('readline');
const modules  = require('./modules.js');

var r1 = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

r1.question("provide input1",function(num1){
    r1.question("provide value 2:",function (num2) {
        console.log("sum of two numbers is: "+ modules.add(num1, num2));
        r1.close();
    })
});
