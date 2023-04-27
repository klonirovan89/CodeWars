function sumArray(array) {
    if (array == null || array == [ ] || array.length < 2){
        return 0;
    }
    let max = Math.max(...array);
    let min = Math.min(...array);
    let result = 0;
    for (i = 0; i < array.length; i++){
            result += array[i];

    }
    return (result - min - max);
}
sumArray([ 0, 1, 6, 10, 10 ])