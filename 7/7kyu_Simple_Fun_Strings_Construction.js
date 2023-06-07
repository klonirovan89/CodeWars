function stringsConstruction(a, b) {
  let result = 0
  let matches = 0
  
  for (let letter of a.split('')) {
    if (!b.includes(letter)) {
      break
    }
    
    b = b.replace(letter, '')
    
    matches++
  }
  
  if (matches !== a.length) {
    return 0
  }
  
  return result + stringsConstruction(a, b) + 1
}
