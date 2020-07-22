console.log("Sum of the three numbers is 1000 and product is "+ pythogoreanTriplet());

// Pythogorean Triplet are three numbers like 3,4,5 where a^2+b^2 = c^2.

function pythogoreanTriplet(){
    const sum = 1000;
    for (a=1;a<=sum/3;a++){
        for (b=a+1;b<=sum/2;b++){
            c = sum-(a+b);
            if (a*a + b*b == c*c){
                var product = a*b*c;
                break;
            }
        }
    }
    return product;
}