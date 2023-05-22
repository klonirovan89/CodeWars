function findShort(s){
let result = s.split(' ')
let result1 = 100;
 for (i = 0; i < result.length; i++) {
    if (result[i].length < result1){
       result1 = result[i].length;
     } 
 }
   return result1;
 }
