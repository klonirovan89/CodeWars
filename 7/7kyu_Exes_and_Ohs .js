function XO(str) {
    let result = '';
    let result1 = '';
    for (i = 0; i < str.length; i++) {
        if (str[i] == 'x' || str[i] == 'X') {
            result += str[i];
        }
        if (str[i] == 'o' || str[i] == 'O') {
            result1 += str[i];
        }
    }
    if (result.length == result1.length) {
        return true;
    }
    if (result.length != result1.length) {
        return false;
    }
}
XO("xxOo")



