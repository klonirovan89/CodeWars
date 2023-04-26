function sumMix(x){
  let sum = 0;
  let number = x.join(' ');
  let number1 = Array.from(String(number), Number);
  for (i = 0; i < number1.length; i++){
    sum += number1[i];
  }
  return sum;
}
