function getGrade (s1, s2, s3) {
    let sumNumber=(s1+s2+s3)/3
    if(sumNumber>=90 && sumNumber<= 100){
        return "A"
    }
    if(sumNumber>=80 && sumNumber<90){
        return "B"
    }
    if(sumNumber>=70 && sumNumber<80){
        return "C"
    }
    if(sumNumber>=60 && sumNumber<70){
        return "D"
    }
    if(sumNumber>=0 && sumNumber<60){
        return "F"
    }       
      }
  getGrade (2, 2, 2)
