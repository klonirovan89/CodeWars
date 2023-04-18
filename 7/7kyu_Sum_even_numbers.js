function sumEvenNumbers(input) {
  let result = 0;
  for (i = 0; i < input.length; i++){
      if(input[i] % 2 == 0){
      result += input[i];    
      }
      }
      return result;
  }
