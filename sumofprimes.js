function getSumPrime(){
    const max=15;
    var sum=2;
    for (i=1;i<=max;i+=2){
        if(i%2 == 0){
            continue;
        }
        if (isPrime(i) == 'yes'){
            sum +=i;
        }
    }
    return sum;
}

function isPrime(value1){
    for(j=3;j<=value1/2;j+=2){
        if (value1%j == 0) {
            var prime = 'no';
            break;
        }
    }
    if ((prime != 'no') && (value1 != 1)){
        prime = 'yes';
    }
    return prime;
}

module.exports = {
    isPrime:isPrime
}

//console.log("sum of all the primes below 2M -20,00,000 " + getSumPrime());