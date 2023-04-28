function fakeBin(x){
 let result = '';
  for (i = 0; i < x.length; i++){
  result = x[i] < 5 ? result + 0 : result + 1;
    }
  return result;
}
