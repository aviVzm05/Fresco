const val = require('./sumofprimes.js');

// const givenNumber=600851475143;
var givenNumber=600851475143;
greaterPrime = 0;

for(i=2;i<=givenNumber;i++){
    if (givenNumber%i==0){
        givenNumber = (givenNumber/i);
        greaterPrime = i;
        i=2;
    }
}

console.log(greaterPrime);