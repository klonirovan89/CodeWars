var maxSequence = function (arr) {
    let sum = 0;
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let a = i; a < arr.length; a++) {
            result += arr[a];
            if (result > sum) {
                sum = result;
            }
        }
    }
    return sum;
}






