function digitize(n) {
    let arr = Array.from(String(n), Number);
    let result = [ ];
for (i = arr.length-1; i >= 0; i--){
    result +=arr[i];
}
    return Array.from(String(result), Number);
}
digitize(35231)