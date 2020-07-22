const readline = require("readline");
const r1 = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

r1.question("maximum number for which sum is needed?",function(maxNum){
    console.log("sum of all multiples of 3/5 below 1000 are " +getMultipleSum(maxNum));
    r1.close();
})


function getMultipleSum(i){
    sum=0;
    for(j=3;j<i;j++){
        if (j%3==0){
            sum +=j
        }else{
            if (j%5==0){
                sum +=j;
            }
        }
    }
    return sum;
}