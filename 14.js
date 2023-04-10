function lovefunc(flower1,flower2){
    if(flower1 % 2 == 0 && flower2 % 2 == 0){
    return console.log("false")
    }
    if (flower1 % 2 != 0 && flower2 % 2 != 0){
    return console.log("false")
    }
    return console.log("true")
    }
    lovefunc(3,6)