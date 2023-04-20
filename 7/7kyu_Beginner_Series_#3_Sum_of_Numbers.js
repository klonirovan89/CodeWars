function getSum(a, b) {
    if(a == b){
        return a;
    }
    let sum = 0;
    if(a < b) {
        for (i = a; i <= b; i++) {
            sum += i;
        }
    }
    if(a > b) {
        for (i = a; i >= b; i--) {
            sum += i;
        }
    }
    return sum;
}
getSum(2,-1)




