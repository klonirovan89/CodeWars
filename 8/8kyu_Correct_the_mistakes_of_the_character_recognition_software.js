function correct(string){
 let result = string.replace(/0/gi, 'O').replace(/1/gi, 'I').replace(/5/gi, 'S');
 return result;
}
