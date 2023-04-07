function descendingOrder(n){
  if(n>=0){
var number = Array.from(String(n))
number.sort((a, b) => b - a)
number1=+number.join('');
return number1
}
}
descendingOrder(312)