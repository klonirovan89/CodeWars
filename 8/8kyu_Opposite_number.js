function opposite(number) {
    if(number > 0){
        return +("-"+number);
    }
    if (number < 0){
       return Math.abs(number);
    }
    if (number == 0){
        return 0;
    }
}
opposite(-12525220.3325)







