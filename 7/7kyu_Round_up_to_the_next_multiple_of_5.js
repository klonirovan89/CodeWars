function roundToNext5(n){
  let result = 0;
if (n % 5 == 0){
    result = n;
    }
  if (n > 0 && n % 5 != 0){
  for (i=n; i % 5 != 0; i++){
    result = i;
        }
        result += 1;
  }
   if (n < 0 && n % 5 != 0){
 for (i=n; i % 5 != 0; i++){
    result = i
 }
 result += 1;
  }
  return result;
}
