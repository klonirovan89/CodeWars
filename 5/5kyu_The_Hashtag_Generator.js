function generateHashtag (str) {
  let arr = str.split(' ');
  arr = arr.filter(function (el) {
    return (el != "");
  });
  if (arr.join('') === '' || arr.join('').length >= 140) {
    return false;
  }  
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].replace(arr[i][0], arr[i][0].toUpperCase());
  }
  arr.unshift('#');
  return arr.join('');
}
