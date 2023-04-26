function removeExclamationMarks(s) {
  let arr = s.split('');
  let result = '';
  for (i = 0; i < arr.length; i++){
    if(arr[i] != '!'){
      result += arr[i];
    }
  }
  return result;
}
