// get highest one from 3 digit number multiplication.

var palindromeString = 0;

for (i=100;i<1000;i++) {
    for (j=100;j<1000;j++){
        num1 = i*j;
        var num1String = num1
        var num2 = getReverse(num1);
        if (num1 == num2) {
            if (num1 > palindromeString) {
                palindromeString = num1;   
            }
        }
    }
}

console.log(palindromeString);

function getReverse(num1){
    var num2 = parseFloat(num1.toString().split('').reverse().join(''));
    return(num2);
}