function likes(names) {
  let i=names.length
  if(i == 0){
    return "no one likes this"
   }
  if(i == 1){
    return  (names[0]+" "+"likes this")
  }
  if(i == 2){
    return (names[0]+" "+"and"+" "+names[1]+" "+"like this")
   }
   if(i == 3){
    return (names[0]+", "+names[1]+" "+"and"+" "+names[2]+" "+"like this")
   }
   if(i == 4){
    return  (names[0]+", "+names[1]+" "+"and 2 others like this")
   }
   if(i > 4){
    return (names[0]+", "+names[1]+" "+"and"+" "+(i-2)+" "+"others like this")
   }
  }
likes(["pasha"])