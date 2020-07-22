//4613732

function getFebonacci(){
    var feb0=1;feb1=1;
    var febN=1;sum=0;
    while(feb1 < 4000000){
        febN = feb0 + feb1;
        if (febN%2 ==0) {
            sum +=febN
        }
        feb0 = feb1;
        feb1 = febN;
    }
    return sum;
}

console.log(getFebonacci());