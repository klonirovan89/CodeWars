function oddOrEven(array){
   let sum = 0;
  for (i = 0; i < array.length; i++){
     sum += array[i];
    }
    return sum % 2 === 0 ? "even" : "odd";
}
