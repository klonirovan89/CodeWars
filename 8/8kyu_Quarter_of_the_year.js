const quarterOf = (month) => {
  if(month <=3){
    return 1;
  } if(month > 3 && month <= 6){
    return 2;
  } if(month > 6 && month <= 9){
    return 3;
  } if(month > 9 && month <= 12){
    return 4;
  }
}
