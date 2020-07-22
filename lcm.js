function calcLcm (a,b){
    var hcf = 1;var  lcm;
    var i = 0;
    var ger = 0;
    if (a>b) {
        ger = a;
    }
    else {
        ger =b;
    }
    while (i<=ger) {
        if ((a%i==0) && (b%i==0)) {
            hcf = i;
        }
        i++;
    }
    lcm = (a*b)/hcf;
    return lcm;
}

lcm = 1;
for (i=1;i<=20;i++){
    lcm = calcLcm(lcm,i);
}
console.log("value of lcm "+lcm);