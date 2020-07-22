//10001st Prime numbers...
// const readline = require("readline");
// const r1 = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// r1.question("which prime number is required?",function(value1){
//     var value3 = nthPrime(value1);
//     console.log("value of ${value1}th Prime is "+ value3);
//     r1.close();
// });

console.log("Value of 10001st Prime is "+nthPrime(10001));

function nthPrime(value1){
    var n=1;
    var i=1;
    while(n<=value1){
        if (getPrime(i) == 'Yes') {
            if (n == value1){
                var value2 = i;
            }
            n++;
        }
        i++;
        if (i > 999999) {
            console.log ("am in infinite looop");
            break;
        }
    }
    return value2;
}

function getPrime(i){
    var prime = 'no'
    var count=0;
    for (j=1;j<=i;j++){
        if (i%j == 0) {
                count++;
        }
    }
    if (count ==2) {
        prime = 'Yes';
    }
    return prime;
}

