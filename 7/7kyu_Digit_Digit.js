function squareDigits(num){
  let array = Array.from(num.toString(), Number)
i=array.length;
array1 = array.map(el => el **2);
array2=array1.join('');
array3=Number(array2);
return array3;
}
squareDigits(3212);
